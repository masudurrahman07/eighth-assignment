export default function Trusted() {


  return (
    <section className="text-white w-full pt-16 pb-16 mt-0" style={{ background:"linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",}}>

      <div className="max-w-6xl mx-auto px-4 text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          <div>
              <p className="text-sm mb-1 opacity-90">   Total Downloads </p>
            <h3 className="text-6xl font-bold mb-2">29.6M</h3>
            <p className="text-xs opacity-75">21% More Than Last Month</p>
          </div>

          <div>
              <p className="text-sm mb-1 opacity-90">Total Reviews</p>
            <h3 className="text-6xl font-bold mb-2">906K</h3>
          
            <p className="text-xs opacity-75">46% More Than Last Month</p>
          </div>

          <div>
            <p className="text-sm  mb-1 opacity-90">Active Apps</p>
            <h3 className="text-6xl font-bold mb-2">132+</h3>
            <p className="text-xs opacity-75">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
