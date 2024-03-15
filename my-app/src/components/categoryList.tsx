export default function CategoryList() {
    return(
        <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 border rounded-lg p-4 mt-8">
          <div className="flex flex-wrap justify-center">
            <div className="mx-8 flex flex-col items-center justify-center">
              <img
                src="https://www.ncrsport.com/img/division/1.png?1"
                alt="Sepatu"
                className="w-8 h-8 mb-2"
              />
              <a href="https://www.ncrsport.com/jual/all/list/1?p=SEPATU">Sepatu</a>
            </div>
            <div className="mx-8 flex flex-col items-center justify-center">
              <img
                src="https://www.ncrsport.com/img/division/4.png?1"
                alt="Baju"
                className="w-8 h-8 mb-2"
              />
              <a href="https://www.ncrsport.com/img/division/4.png?1">Baju</a>
            </div>
            <div className="mx-8 flex flex-col items-center justify-center">
              <img
                src="https://www.ncrsport.com/img/division/7.png?1"
                alt="Tas"
                className="w-8 h-8 mb-2"
              />
              <a href="https://www.ncrsport.com/img/division/7.png?1">Tas</a>
            </div>
            <div className="mx-8 flex flex-col items-center justify-center">
              <img
                src="https://www.ncrsport.com/img/division/3.png?1"
                alt="Celana"
                className="w-8 h-8 mb-2"
              />
              <a href="https://www.ncrsport.com/img/division/3.png?1">Celana</a>
            </div>
            <div className="mx-8 flex flex-col items-center justify-end">
              <img
                src="https://www.ncrsport.com/img/division/10.png?1"
                alt="Sandal"
                className="w-8 h-8 mb-2"
              />
              <a href="https://www.ncrsport.com/img/division/10.png?1" className="">Sandal</a>
            </div>
          </div>
        </div>
      </div>
    )
}