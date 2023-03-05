
interface Props{
  title: string;
  subTitle?: string;
  name?: string;
}

export const FirstApp = ({ title, subTitle='Sin subtitulo', name='Sin nombre' }:Props) => {
  
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      {/* <p>{ subTitle }</p> */}
      <p>{ subTitle }</p>
      <span>{ name }</span>
    </>
  )
}


