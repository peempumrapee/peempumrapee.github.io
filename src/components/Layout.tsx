import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-mat-border bg-mat-bg">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-8">
          <nav aria-label="Main navigation">
            <div className="flex items-center gap-6 text-sm font-semibold">
              {[
                { to: '/', label: 'Home' },
                { to: '/blog', label: 'Blogs' },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => isActive
                    ? 'text-mat-link'
                    : 'text-mat-text-secondary hover:text-mat-text'}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <div className="pt-16">{children}</div>
    </>
  )
}
