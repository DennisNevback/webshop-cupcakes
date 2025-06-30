
function Home() {

  return (
    <>
      <div className="flex flex-col justify-start pb-5 space-y-3 wrap-normal px-3 sm:px-3 md:px-12 xl:px-50 2xl:px-170 xl:mt-10">
        <div>
          <h2 className="text-2xl">Hej!</h2>
          <p>Välkommen till Dennis Dessert. Vi erbjuder muffins och tårtor för all typer av event och fest. </p>
          <p>Kika runt på sidan och tveka inte att kontakta mig via email eller telefon om du har frågot och funderingar om antingen allergier eller beställning</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center space-y-5 gap-x-4 xl:mt-3">
          <img src="./images/cakes/christiann-koepke-AigxB1zfRVo-unsplash.jpg" alt="" />
          <img src="./images/cakes/james-coleman-5HR1gItc7Gs-unsplash.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home