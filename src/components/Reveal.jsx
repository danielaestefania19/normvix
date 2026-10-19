import useInView from '../hooks/useInView'

const hidden = {
  up: 'opacity-0 translate-y-8',
  left: 'opacity-0 -translate-x-10',
  right: 'opacity-0 translate-x-10',
  scale: 'opacity-0 scale-95',
}

export default function Reveal({ children, delay = 0, className = '', variant = 'up', as: Tag = 'div' }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        inView ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hidden[variant]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
