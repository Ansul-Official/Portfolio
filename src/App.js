import Axios from 'axios';
import React from 'react';

const profile = [
  {image:"https://www.rkh.co.uk/uploads/avatars/Will_Jones.png.180x0_q85.png"},
  {image:"https://www.rkh.co.uk/uploads/avatars/Hash_Mistry.jpg.180x0_q85.jpg"},
  {image:"https://www.rkh.co.uk/uploads/avatars/victoria-hauser.png.180x0_q85.png"},
  {image:"https://www.rkh.co.uk/uploads/avatars/ruth-davies.png.190x200_q85_crop.png.180x0_q85.png"},
  {image:"https://www.rkh.co.uk/uploads/avatars/katie-westwood.png.180x0_q85.png"},
  {image:"https://www.rkh.co.uk/uploads/avatars/melissa-cassidy.png.180x0_q85.png"},
  {image:"https://www.rkh.co.uk/uploads/avatars/john-harris_dUN77Ub.png.180x0_q85.png"},
  {image:"https://www.rkh.co.uk/uploads/avatars/alex-moore.png.190x200_q85_crop.png.180x0_q85.png"},
  {image:"https://www.rkh.co.uk/uploads/avatars/harriet-broomhead.png.190x200_q85_crop.png.180x0_q85.png"},
  {image:"https://www.rkh.co.uk/uploads/avatars/annabelle-harper.png.190x200_q85_crop.png.180x0_q85.png"},
]

const App = () => {
const [namae, setNamae] = React.useState([])
var i = 0;

React.useEffect(() => {
  Axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    setNamae(res.data)
  }).catch((err) => {
    console.log(err);
  });
}, []);
  return (
<>
  {/* Hello world */}
  <nav className="navbar navbar-expand-lg fixed-top navbar-light">
    <div className="container">
      <img src="/img/Android.png" width={25} height={30} className="d-inline-block align-top"/>
      <a className="navbar-brand page-scroll color-wt-lnk weight-bld p-left-10" href="#home">
        Batik Kita
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link page-scroll color-wt-lnk" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll color-wt-lnk" href="#team">Our Team</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section className="jumbotron" id="home">
    <div className="row">
      <div className="col-sm-5  aw text-left">
        <p className="offset-md-1 title">Batik Kita</p>
        <p className="offset-md-1 description">Selamat datang di Batik Kita, dimana disini menjual berbagai motif batik untuk oleh-oleh.</p>
        <div className="bton text-center">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <a href="#about" className="expl btn btn-primary btn-lg page-scroll">Explore</a>
            </div>
            <div className="spasi col-xs-12 col-sm-6 col-md-4">
              <a className="down btn btn-warning btn-lg">Download</a>
            </div>
          </div>
        </div>
      </div>
      <div className="atasp col-sm-7 aw text-center">
        <img height={400} width="auto" src="/img/Aplikasi-1.png"/>
      </div>
    </div>
  </section>
  {/* Mie Sedap Selection :v */}
  <section className="about" id="about">
    <div className="container selection">
      <div className="row text-center">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="mantab text-black mb-4"><i className="fa fa-layer-group" aria-hidden="true" /></div>
          <h3>Built for developers</h3>
          <p className="mb-0">Our customizable, block-based build system makes creating your next project fast and easy!</p>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="mantab text-black mb-4"><i className="fa fa-mobile" aria-hidden="true" /></div>
          <h3>Modern responsive design</h3>
          <p className="mb-0">Featuring carefully crafted, mobile-first components, your end product will function beautifully on any device!</p>
        </div>
        <div className="col-lg-4">
          <div className="mantab text-black mb-4"><i className="fa fa-code" aria-hidden="true" /></div>
          <h3>Complete documentation</h3>
          <p className="mb-0">All of the layouts, page sections, components, and utilities are fully covered in this products docs.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Contact */}
  <section id="team" className="pb-5 team">
        <div className="container">
          <h5 className="section-title h1">OUR TEAM</h5>
          <div className="row">
            {/* Team member */}
            {namae.map((item) => {
              return(
                <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                              <p><img className=" img-fluid" src={profile[i++].image} alt="card image" /></p>
                          <h4 className="card-title">{item.name}</h4>
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">{item.name}</h4>
                          <p className="card-text">
                          <h5>Detail Info</h5>
                          <br/><b>Email:</b> {item.email}
                          <br/><b>Adress:</b> {item.address.street}, {item.address.suite}, {item.address.city}, ({item.address.zipcode})
                          <br/><b>Phone:</b> {item.phone}
                          <br/><b>Website:</b> {item.website}
                          <br/><b>Previous Company:</b> {item.company.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
              )
            })}
            {/* ./Team member */}
          </div>
        </div>
      </section>
  <footer className="py-4 bg-dark flex-shrink-0">
    <div className="container text-center copyright">
      Copyright © 2021 | <a href="https://instagram.com/syahrul.falah.bae">Syahrul</a>
    </div>
  </footer>
</>
  );
}

export default App;
