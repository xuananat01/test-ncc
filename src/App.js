import "./App.css";
import CssIcon from "./images/css-icon.png";
import HtmlIcon from "./images/html-icon.png";
import UrlIcon from "./images/url-icon.png";
import Logo from "./images/logoNCC.png";

function App() {
  const menuBar = ["Home", "Services", "News", "Blog", "Contact"];
  const cardItems = [
    {
      title: "Lorem ipsum dolor sit asmet?",
      img: CssIcon,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.",
    },
    {
      title: "Lorem ipsum dolor sit asmet?",
      img: HtmlIcon,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.",
    },
    {
      title: "Lorem ipsum dolor sit asmet?",
      img: UrlIcon,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.",
    },
  ];
  return (
    <div className="app">
      <div className="side-bar">
        {menuBar.map((item) => (
          <div key={item} className="menu-item">
            {item}
          </div>
        ))}
      </div>
      <div className="content">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="logo-NCC" />
          </div>
          <div className="lorem-text-box">
            <div>
              <span className="lorem-title">Lorem ipsum dolor sit asmet?</span>
            </div>
            <div>
              <span className="lorem-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
              </span>
            </div>
          </div>
          <div className="lorem-cards">
            {cardItems.map((item) => (
              <div key={item.img} className="lorem-card-item">
                <span className="lorem-card-title">{item.title}</span>
                <img src={item.img} alt="css-icon" className="lorem-img" />
                <span className="lorem-card-text">{item.lorem}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer">Copyright © 2021</div>
      </div>
    </div>
  );
}

export default App;
