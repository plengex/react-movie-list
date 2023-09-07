import { PropsWithChildren, ReactElement } from 'react'

const Container = (props: PropsWithChildren): ReactElement => {
  return (
    <div className="mx-4 lg:mx-auto max-w-[1080px]">
      {props.children}
    </div>
  )
}

export default Container