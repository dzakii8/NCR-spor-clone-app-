export default function Carousel() {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-1/3 inline-block p-2">
            <img src="https://www.ncrsport.com/img/slider/3/%20Sepatu%20Sneakers%20Adidas%20gazelle%20black-883.jpg" className="w-full rounded" />
          </div>
          <div className="w-1/3 inline-block p-2">
            <img src="https://www.ncrsport.com/img/slider/5/Sepatu%20Lari%20Nineten%20haze%20pro%20magelang%20merah%20hitam-882.jpg" className="w-full rounded" />
          </div>
          <div className="w-1/3 inline-block p-2">
            <img src="https://www.ncrsport.com/img/slider/2/AJ%20ZION%203%20-%20WHITE-881.jpg" className="w-full rounded" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-1/3 inline-block p-2">
            <img src="https://www.ncrsport.com/img/slider/2/AJ%20ZION%203%20-%20WHITE-881.jpg" className="w-full rounded" />
          </div>
          <div className="w-1/3 inline-block p-2">
            <img src="https://www.ncrsport.com/img/slider/2/NB%20TWO%20WXY%20V4%20-%20WHITE%20BLUE-880.jpg" className="w-full rounded" />
          </div>
          <div className="w-1/3 inline-block p-2">
            <img src="https://www.ncrsport.com/img/slider/5/Nike%20Zoomx%20Vaporfly%203%20Eliud%20Kipchoge-879.jpg" className="w-full rounded" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    )
}