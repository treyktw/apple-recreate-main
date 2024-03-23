import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: gsap.TweenTarget, 
  animationProps: gsap.TweenVars, 
  scrollProps?: gsap.DOMTarget | ScrollTrigger.Vars | undefined
  ) => {
    const triggerElement: gsap.DOMTarget = (target as any).$el || target;
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: triggerElement,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...(scrollProps || {})
    }
  })
}


export const animateWithGsapTimeline = (
  timeline: { 
      to: (arg0: any, arg1: { y: any; duration: number; ease: string; }, arg2?: string | undefined) => void; },
       rotationRef: { current: { rotation: any; }; }, rotationState: any, firstTarget: any, secondTarget: any, animationProps: any
      ) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
}