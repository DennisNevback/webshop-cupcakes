
function Contact() {

  return (
    <div className="flex flex-col justify-start pb-5 space-y-3 wrap-normal pl-3 sm:pl-3 md:pl-15 xl:pl-50 2xl:pl-170">
      <h2 className="text-2xl">Kontakt</h2>
      <span className="flex flex-col">
        <span>
          <h5 className="font-semibold">Adress:</h5>
          <p>Största Fejkgatan 17</p>
          <p>222 22 Malmö</p>
        </span>
        <span>
          <p className="font-semibold">Kontakt:</p>
          <p><a href="mailto:fake_email@bake.com">fake_email@bake.com</a></p>
          <p>070 000 00 000</p>
        </span>
      </span>
      <p>Leverans endast inom Malmö</p>
      <p>Gratis leverans på order över 500kr</p>
      <p>Ordrar under 500kr kan plockas upp i vår butik</p>
      <p>Ordrar måste ske två dagar innan förväntad leverans</p>
      <span>
        <h3 className="font-semibold">Öppettider</h3>
        <p>Må-fre: 07.00 - 16.00</p>
        <p>Lör: 08.00 - 12.00</p>
        <p>Sön: Stängt</p>
      </span>

    </div>
  )
}

export default Contact