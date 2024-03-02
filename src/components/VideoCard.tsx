

export function VideoCard(props: any) {
  return <div className="p-3 cursor-pointer">
    <img className="rounded-xl ring-2 ring-grey-500" src={props.image}></img>
    <div className="grid grid-cols-12 pt-2">
      <div className="col-span-1"><img className={"rounded-full w-15 h-15 pt-1"} src={props.thumbnail}></img></div>
      <div className="col-span-11 pl-2"> {props.title}
        <div className="col-span-11  text-gray-400"> {props.author} </div>
        <div className="col-span-11 text-gray-400"> {props.views}  | {props.timestamp} </div>
      </div>
    </div>
  </div>
}