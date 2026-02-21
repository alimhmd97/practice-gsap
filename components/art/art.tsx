import { featureLists, goodLists } from '../navbar/consts';

export default function Art() {
  return (
    <div id="art">
      <div className="  mx-auto h-full pt-20">
        <h2 className="will-fade">The Art</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((item, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src={`/images/check.png`} alt={item} />
                <p className="w-60 md:w-fit">{item}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src={`/images/under-img.jpg`}
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((item, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src={`/images/check.png`} alt={item} />
                <p className="w-60 md:w-fit">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="masked-container">
            <h2 className="will-fade">Sip-Worthy Perfection</h2>
            <div id="masked-content">
              <h3>Made with Craft, Poured with Passion</h3>
              <p>
                This isn&apos;t just a drink. It&apos;s a carefully crafted
                moment made just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
