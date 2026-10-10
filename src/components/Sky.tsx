import { useEffect, useRef } from 'react';

// Configuration constants
const STAR_COUNT_DESKTOP = 150;
const STAR_COUNT_MOBILE = 60;
const SHOOTING_STAR_MIN_INTERVAL = 2000;
const SHOOTING_STAR_MAX_INTERVAL = 8000;
const MAX_SHOOTING_STARS = 15;
const FALLING_GLOW_MIN_INTERVAL = 10000;
const FALLING_GLOW_MAX_INTERVAL = 20000;
const MAX_DPR = 2;

// Colors from DESIGN.md
const COLOR_STAR = '#FFFFFF';
const COLOR_GLOW = '#ECA3E2';

class StaticStar {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinklePhase: number;
  twinkleSpeed: number;
  layer: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    
    // 3 depth layers: tiny/dim, small, larger bright
    const rand = Math.random();
    if (rand < 0.6) {
      this.layer = 0; // tiny/dim
      this.size = Math.random() * 0.8 + 0.2;
      this.baseOpacity = Math.random() * 0.3 + 0.1;
    } else if (rand < 0.95) {
      this.layer = 1; // small
      this.size = Math.random() * 1.2 + 0.8;
      this.baseOpacity = Math.random() * 0.4 + 0.3;
    } else {
      this.layer = 2; // larger bright
      this.size = Math.random() * 2 + 1.5;
      this.baseOpacity = Math.random() * 0.5 + 0.5;
    }

    // Twinkle cycle 2-6s (converted to rad/frame approx at 60fps)
    const cycleSeconds = Math.random() * 4 + 2;
    this.twinkleSpeed = (Math.PI * 2) / (cycleSeconds * 60);
    this.twinklePhase = Math.random() * Math.PI * 2;
  }

  draw(ctx: CanvasRenderingContext2D, reducedMotion: boolean, heroHeight: number) {
    this.twinklePhase += this.twinkleSpeed;
    
    let currentOpacity = this.baseOpacity;
    if (!reducedMotion) {
      // Fluctuate opacity by +/- 30% of base
      const twinkle = Math.sin(this.twinklePhase) * 0.3 * this.baseOpacity;
      currentOpacity = Math.max(0, Math.min(1, this.baseOpacity + twinkle));
    }

    // Dimmer below hero
    if (this.y > heroHeight) {
      currentOpacity *= 0.3; // significantly dimmer
    }

    ctx.globalAlpha = currentOpacity;
    ctx.fillStyle = COLOR_STAR;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class ShootingStar {
  active: boolean = false;
  x: number = 0;
  y: number = 0;
  length: number = 0;
  speedX: number = 0;
  speedY: number = 0;
  opacity: number = 0;
  fadeState: 'in' | 'out' = 'in';

  spawn(width: number, height: number) {
    this.active = true;
    this.x = Math.random() * width;
    this.y = Math.random() * height * 0.5; // Spawn in top half usually
    this.length = Math.random() * 80 + 40;
    
    // Parallel diagonal movement for meteor shower
    const angle = 40 * (Math.PI / 180); // 40 degrees
    const speed = Math.random() * 15 + 20;
    this.speedX = Math.cos(angle) * speed;
    this.speedY = Math.sin(angle) * speed;
    
    this.opacity = 0;
    this.fadeState = 'in';
  }

  updateAndDraw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.fadeState === 'in') {
      this.opacity += 0.05;
      if (this.opacity >= 1) this.fadeState = 'out';
    } else {
      this.opacity -= 0.02;
      if (this.opacity <= 0) this.active = false;
    }

    if (this.opacity > 0) {
      ctx.globalAlpha = this.opacity;
      ctx.strokeStyle = COLOR_STAR;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - this.speedX * (this.length / 10), this.y - this.speedY * (this.length / 10));
      ctx.stroke();
    }
  }
}

class FallingGlow {
  active: boolean = false;
  x: number = 0;
  y: number = 0;
  size: number = 0;
  speedY: number = 0;
  speedX: number = 0;
  opacity: number = 0;
  phase: number = 0;
  lifetime: number = 0;
  maxLifetime: number = 0;

  spawn(width: number) {
    this.active = true;
    this.x = Math.random() * width;
    this.y = -50; // Start above screen
    this.size = Math.random() * 3 + 2;
    this.speedY = Math.random() * 0.5 + 0.3; // Slow falling
    this.speedX = (Math.random() - 0.5) * 0.2; // Slight drift
    this.opacity = 0;
    this.phase = Math.random() * Math.PI * 2;
    this.lifetime = 0;
    // 4-7 seconds at 60fps
    this.maxLifetime = (Math.random() * 3 + 4) * 60;
  }

  updateAndDraw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;

    this.x += this.speedX;
    this.y += this.speedY;
    this.lifetime++;
    this.phase += 0.05;

    // Fade in and out over lifetime
    const lifeProgress = this.lifetime / this.maxLifetime;
    // Pulse effect
    const pulse = (Math.sin(this.phase) * 0.3 + 0.7);
    
    if (lifeProgress < 0.2) {
      this.opacity = (lifeProgress / 0.2);
    } else if (lifeProgress > 0.8) {
      this.opacity = (1 - ((lifeProgress - 0.8) / 0.2));
    } else {
      this.opacity = 1;
    }

    if (this.lifetime >= this.maxLifetime) {
      this.active = false;
    }

    if (this.opacity > 0) {
      const currentOpacity = this.opacity * pulse * 0.6; // Max opacity 0.6
      
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
      grad.addColorStop(0, `${COLOR_GLOW}${Math.floor(currentOpacity * 255).toString(16).padStart(2, '0')}`);
      grad.addColorStop(1, `${COLOR_GLOW}00`);

      ctx.fillStyle = grad;
      ctx.globalAlpha = 1; // Gradient has alpha
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = COLOR_STAR;
      ctx.globalAlpha = currentOpacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
class CursorSparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;

  constructor(x: number, y: number, burst: boolean) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.maxLife = burst ? Math.random() * 30 + 40 : Math.random() * 20 + 20; 
    this.life = this.maxLife;
    this.color = Math.random() > 0.5 ? '#FFFFFF' : COLOR_GLOW;

    if (burst) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
    } else {
      // Wider spread so they don't get covered by the comet line
      this.vx = (Math.random() - 0.5) * 10;
      this.vy = (Math.random() - 0.5) * 10;
    }
  }

  updateAndDraw(ctx: CanvasRenderingContext2D) {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;

    const progress = this.life / this.maxLife;
    const currentSize = this.size * Math.max(progress, 0);
    
    if (this.life <= 0) return;
    
    ctx.globalAlpha = progress;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    
    // Draw a simple circle
    ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
    ctx.fill();
  }
}

class ExplosionRing {
  x: number;
  y: number;
  radius: number = 0;
  maxRadius: number = 50;
  speed: number = 3;
  active: boolean = true;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  updateAndDraw(ctx: CanvasRenderingContext2D) {
    if (!this.active) return;
    
    this.radius += this.speed;
    if (this.radius > this.maxRadius) {
      this.active = false;
      return;
    }

    const progress = 1 - (this.radius / this.maxRadius);
    
    ctx.globalAlpha = progress * 1; // Slightly transparent solid flash
    ctx.fillStyle = COLOR_GLOW;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function Sky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: StaticStar[] = [];
    const cursorSparkles: CursorSparkle[] = [];
    const explosionRings: ExplosionRing[] = [];
    const pointerPath: { x: number; y: number; age: number }[] = [];
    const shootingStars: ShootingStar[] = Array.from({ length: MAX_SHOOTING_STARS }, () => new ShootingStar());
    const fallingGlows: FallingGlow[] = [new FallingGlow(), new FallingGlow()];
    
    let lastShootingStarTime = 0;
    let lastFallingGlowTime = 0;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const initCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);

      // Re-init stars based on screen width
      const starCount = width < 768 ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP;
      
      // Keep density somewhat higher near top by biasing Y coordinate during creation
      stars = Array.from({ length: starCount }, () => {
        const star = new StaticStar(width, height);
        // Bias y towards top
        if (Math.random() < 0.6) {
          star.y = star.y * 0.5; 
        }
        return star;
      });
    };

    initCanvas();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initCanvas, 200);
    };
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if (e.type.startsWith('touch')) {
        clientX = (e as TouchEvent).touches[0].clientX;
        clientY = (e as TouchEvent).touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      
      // Spawn trail on move (almost always)
      if (Math.random() < 0.9) {
        cursorSparkles.push(new CursorSparkle(clientX, clientY, false));
      }
      pointerPath.push({ x: clientX, y: clientY, age: 0 });
    };
    
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      if (e.type.startsWith('touch')) {
        clientX = (e as TouchEvent).touches[0].clientX;
        clientY = (e as TouchEvent).touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      
      // Spawn burst and explosion ring
      explosionRings.push(new ExplosionRing(clientX, clientY));
      for (let i = 0; i < 20; i++) {
        cursorSparkles.push(new CursorSparkle(clientX, clientY, true));
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { capture: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true, capture: true });
    window.addEventListener('mousedown', handlePointerDown, { capture: true });
    window.addEventListener('touchstart', handlePointerDown, { passive: true, capture: true });

    const render = (time: number) => {
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      const heroHeight = window.innerHeight; // Hero is 100svh

      ctx.clearRect(0, 0, width, height);

      // 1. Draw static stars
      stars.forEach(star => star.draw(ctx, reducedMotion, heroHeight));

      if (!reducedMotion) {
        // 2. Shooting stars (Meteor shower)
        if (time - lastShootingStarTime > Math.random() * (SHOOTING_STAR_MAX_INTERVAL - SHOOTING_STAR_MIN_INTERVAL) + SHOOTING_STAR_MIN_INTERVAL) {
          const inactiveStar = shootingStars.find(s => !s.active);
          if (inactiveStar) {
            inactiveStar.spawn(width, height);
            lastShootingStarTime = time;
          }
        }
        shootingStars.forEach(star => star.updateAndDraw(ctx));

        // 3. Falling glows
        if (time - lastFallingGlowTime > Math.random() * (FALLING_GLOW_MAX_INTERVAL - FALLING_GLOW_MIN_INTERVAL) + FALLING_GLOW_MIN_INTERVAL) {
          const inactiveGlow = fallingGlows.find(g => !g.active);
          if (inactiveGlow) {
            inactiveGlow.spawn(width);
            lastFallingGlowTime = time;
          }
        }
        fallingGlows.forEach(glow => glow.updateAndDraw(ctx));
      }
      
      // 4. Cursor sparkles (always render if user requested them)
      for (let i = cursorSparkles.length - 1; i >= 0; i--) {
        const sparkle = cursorSparkles[i];
        sparkle.updateAndDraw(ctx);
        if (sparkle.life <= 0) {
          cursorSparkles.splice(i, 1);
        }
      }
      
      // 5. Cursor continuous trail
      for (let i = pointerPath.length - 1; i >= 0; i--) {
        pointerPath[i].age++;
        if (pointerPath[i].age >= 30) {
          pointerPath.splice(i, 1);
        }
      }

      if (pointerPath.length > 1) {
        ctx.shadowBlur = 15;
        ctx.shadowColor = COLOR_GLOW;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        for (let i = 0; i < pointerPath.length - 1; i++) {
          const p1 = pointerPath[i];
          const p2 = pointerPath[i + 1];
          const progress = 1 - (p2.age / 30);
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = COLOR_GLOW;
          ctx.lineWidth = Math.max(0.1, 12 * Math.pow(progress, 2));
          ctx.globalAlpha = progress;
          ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
      }
      
      // 6. Explosion rings
      for (let i = explosionRings.length - 1; i >= 0; i--) {
        const ring = explosionRings[i];
        ring.updateAndDraw(ctx);
        if (!ring.active) {
          explosionRings.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove, { capture: true });
      window.removeEventListener('touchmove', handlePointerMove, { capture: true } as any);
      window.removeEventListener('mousedown', handlePointerDown, { capture: true });
      window.removeEventListener('touchstart', handlePointerDown, { capture: true } as any);
      mediaQuery.removeEventListener('change', handleMotionChange);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
}
