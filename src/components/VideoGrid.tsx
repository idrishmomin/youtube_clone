import { VideoCard } from "./VideoCard"

const Vidios = [{
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
},
{
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
}, {
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
}, {
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
},
{
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
},
{
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
}, {
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
}, {
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
},
{
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
},
{
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
}, {
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
}, {
    title: "Beautiful Nature video",
    image: "MainImage.jpg",
    thumbnail: "T-series.jpg",
    author: "T-Series",
    views: "20Mn",
    timestamp: "13 days ago"
},
]


export function VideoGrid(props: any) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Vidios.map(video => <div>
            <VideoCard  title={video.title} 
            image={video.image} 
            thumbnail={video.thumbnail} 
            author={video.author}      
            views={video.views} 
            timestamp={video.timestamp} 
            ></VideoCard>
        </div>)}

    </div>
}
