import { Suspense, lazy, LazyExoticComponent, ComponentType, PropsWithoutRef } from 'react'

const suspensed = <P extends object>(child: LazyExoticComponent<ComponentType<P>>) => (props: PropsWithoutRef<P>) => {
  const Component = child

  return (
    <Suspense fallback={<div />}>
      <Component {...props} />
    </Suspense>
  )
}

export const List          = suspensed(lazy(() => import('./List')))
export const Detail        = suspensed(lazy(() => import('./Detail')))
export const ErrorNotFound = suspensed(lazy(() => import('./ErrorNotFound')))
