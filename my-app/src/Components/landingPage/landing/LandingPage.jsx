import "./landingPage.css";
import landingImg from "../images/landing.svg";
import logo from "../../../assets/logo.svg";
import shirts from "../../../assets/mens/shirts.svg";
import cargo from "../../../assets/mens/cargo.svg";
import casual from "../../../assets/mens/casualshirts.svg";
import fitjeans from "../../../assets/mens/fitjeans.svg";
import regular from "../../../assets/mens/regularjeans.svg";
import shoe from "../../../assets/mens/shoes.svg";
import tshirts from "../../../assets/mens/tshirts.svg";
import cotton from "../../../assets/mens/cotton.svg";
import footwear from "../../../assets/offer/footwear.svg";
import kurthsets from "../../../assets/offer/kurthasets.svg";
import lehenga from "../../../assets/offer/lehenga.svg";
import sweatshirts from "../../../assets/offer/sweatshirt.svg";
import topbrands from "../../../assets/offer/topbrand.svg";
import womentshirts from "../../../assets/offer/tshirts.svg";
import Profile from "../../Profile/profile/profile.jsx";
import KurtaSets from "../../offer/kurasets.jsx";

export default function LandingPage() {
  return (
    <div>
      <div>
        <img className="pic" src={landingImg} alt="" />
        <div className="bg">
          <section className="section">
            <h1 className="sp">
              <span>CATEGORIES ON OFFER</span>
            </h1>
            <div className="box-container">
              <KurtaSets />
              <div className="box">
                <img src="https://cdn.shopify.com/s/files/1/0486/0634/7416/products/Peter_20Pan_20Collar_20Pleated_20A_20Line_20Dress_20-_20Green_L2_800x.jpg?v=1615471285" />
                <h3>Dresses</h3>
                <p>Under 799</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfvBYMclBvrUCXWrky71sPqkICNUTQ_JJBOF3-5GzUWNN5L2JXeonOvlgFYABBG-o92NbxZ8McNeUAisLbzKF7ewUfTEZAEuXBYhid0zQ6tQpXJF9MHWGm&usqp=CAc" />
                <h3>Kurtas</h3>
                <p>Under 599</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src={womentshirts} />
                <h3>T-Shirts</h3>
                <p>Under 399</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src={sweatshirts} />
                <h3>Sweatshirts</h3>
                <p>Under 599</p>
                <button className="button">SHOP NOW</button>
              </div>
              <div className="box">
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4Sp17iWQK25qQ9BpilXG4gz0GGOcEb-JBTG6mYGecb35qEKRTbj_55ywP8mz8-TzYGJ9zFhvJVvH84-Bzy98U-Xo5ti1H2RJLU3uLeDhWU6s70bXHli03&usqp=CAc" />
                <h3>Tops</h3>
                <p>under 499</p>
                <button className="button">SHOP NOW</button>
              </div>
              <div className="box">
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSjO8PNJIJhYhlWlgfuYdEG6zwHp0qEQfiF_G21S5l6PT8rwG4jjiwqGf8yb0wuGmOpaQlzFi4esSJcIIMHIt0kXlpq005f1UAqCaPB7TumnmBmb7D6L1r6w&usqp=CAE" />
                <h3>Tops tees</h3>
                <p>under 149</p>
                <button className="button">SHOP NOW</button>
              </div>
              <div className="box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5Qkl_kCWpb-t6Exz5a0ZYnzvUztlvZJm9w&usqp=CAU" />
                <h3>Night Suits</h3>
                <p>under 499</p>
                <button className="button">SHOP NOW</button>
              </div>
            </div>
          </section>

          <section className="section">
            <h1 className="sp">
              <span>KIDS WEAR</span>
            </h1>
            <div className="box-container">
              <div className="box">
                <img src={lehenga} />
                <h3>lehenga choli</h3>
                <p>Under 999</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src={footwear} />
                <h3>footwear</h3>
                <p>Min.50% OFF</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbUrr0fzUBjFX0sjZ0rM-SMWlZ0BqgB82f1Q8VYFwQDrBlygsL-2WJ9vbwtgbxcO6zrp6zL-lDVi2zZZ3cZKRZcqkxZUzI5Q&usqp=CAE" />
                <h3>infant wear</h3>
                <p>Min.50% OFF</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTRGMN3S7Cf9xplZ2twOM3U7MV-KukvUVpYwJDkqSiKcHrU9cj5XRYvcUxBoLYtJsNn2vgP38aiRlReXCGB4FJwVP1fcjsTK42BFG4zvaIS&usqp=CAE" />
                <h3>kurta sets</h3>
                <p>under 899</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src={topbrands} />
                <h3>top brands</h3>
                <p>40-70% OFF</p>
                <button className="button">SHOP NOW</button>
              </div>
              <div className="box">
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSjO8PNJIJhYhlWlgfuYdEG6zwHp0qEQfiF_G21S5l6PT8rwG4jjiwqGf8yb0wuGmOpaQlzFi4esSJcIIMHIt0kXlpq005f1UAqCaPB7TumnmBmb7D6L1r6w&usqp=CAE" />
                <h3>Tops tees</h3>
                <p>under 499</p>
                <button className="button">SHOP NOW</button>
              </div>
              <div className="box">
                <img src="data:image/jpeg;base64,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" />
                <h3>Frocks</h3>
                <p>under 999</p>
                <button className="button">SHOP NOW</button>
              </div>
              <div className="box">
                <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRT9W3LDPKeNgg-GVtUIvpKE2jxrSYjHLx_4vjKBwFfka4HiYgKvVVX5IkK6akWEBJF2BgWMg1Py3riyM3zdxwZwv20axKcd3o5gRNWhQxG&usqp=CAc" />
                <h3>Sherwani</h3>
                <p>under 999</p>
                <button className="button">SHOP NOW</button>
              </div>
            </div>
          </section>

          <section className="section">
            <h1 className="sp">
              <span>BRILLIANT BRANDS</span>
            </h1>
            <div className="box-container">
              <div className="box">
                <img src="https://imagescdn.pantaloons.com/img/app/product/5/547045-6951383.jpg?imwidth=256" />
                <h3>Pantaloons</h3>
                <p>Upto 60% Off</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src="data:image/jpeg;base64,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" />
                <h3>PUMA</h3>
                <p>40-60% Off</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfvBYMclBvrUCXWrky71sPqkICNUTQ_JJBOF3-5GzUWNN5L2JXeonOvlgFYABBG-o92NbxZ8McNeUAisLbzKF7ewUfTEZAEuXBYhid0zQ6tQpXJF9MHWGm&usqp=CAc" />
                <h3>ONLY</h3>
                <p>Upto 50% Off</p>
                <button className="button">SHOP NOW</button>
              </div>

              <div className="box">
                <img src="data:image/jpeg;base64,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" />
                <h3>COLORS</h3>
                <p>Upto 30% Off</p>
                <button className="button">SHOP NOW</button>
              </div>
            </div>
          </section>

          <section className="add">
            <div>
              <img src="https://www.bestbridalshop.com/wp-content/uploads/2023/03/Blue-Pink-Modern-Special-Offer-Sale-Banner-1.png" />
            </div>
          </section>

          <section className="section">
            <h1 className="sp">
              <span>MENS WEAR</span>
            </h1>
            <div className="box-container">
              <div className="mens">
                <img src={shirts} alt="" />
              </div>
              <div className="mens">
                <img src={regular} alt="" />
              </div>
              <div className="mens">
                <img src={fitjeans} alt="" />
              </div>
              <div className="mens">
                <img src={casual} alt="" />
              </div>
              <div className="mens">
                <img src={cotton} alt="" />
              </div>
              <div className="mens">
                <img src={shoe} alt="" />
              </div>
              <div className="mens">
                <img src={cargo} alt="" />
              </div>
              <div className="mens">
                <img src={tshirts} alt="" />
              </div>
            </div>
          </section>
        </div>
        <section className="contact">
          <div className="bb">
            <div>
              <ul>
                <h3>Customer</h3>
                <li>Help/Faqs</li>
                <br />
                <br />
                <li>Track Order</li>
                <br />
                <br />
                <li>Size Guide</li>
                <br />
                <br />
                <li>Buying Guide</li>
                <br />
                <br />
                <li>How Do I Shop?</li>
                <br />
                <br />
                <li>How Do I Pay?</li>
              </ul>
            </div>
          </div>
          <div className="bb">
            <div>
              <ul>
                <h3>Help</h3>
                <li>Shipping</li>
                <br />
                <br />
                <li>Return Policy</li>
                <br />
                <br />
                <li>Help Center</li>
                <br />
                <br />
                <li>Terms & Conditons</li>
                <br />
                <br />
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="bb">
            <div>
              <ul>
                <h3>Contact Us</h3>
                <li>Urban Fashion</li>
                <br />
                <br />
                <li>Karnataka, India</li>
                <br />
                <br />
                <li>E-mail address:</li>
                <br />
                <br />
                <li>query@cf.com</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
