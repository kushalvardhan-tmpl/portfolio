import Header from "../myComponents/header";
import "../stylecomponents/Singlepageblog.css";
import Footer from "../myComponents/footer";
import { Comment } from "../myComponents/comment";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
const SinglePage = () => {
  return (
    <div>
      <Header />
      <div className="blogheadingcontainer">
        <div className="blogheading">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <div className="shareButtons">
            <button id="facebookShare">
              <img src={"/assets/fb-logo.png"} alt="fbLogo" /> Share on Facebook
            </button>
            <button id="twitterShare">
              <img src={"/assets/twitter-logo.png"} alt="tweetlogo" /> Share on
              Twitter
            </button>
          </div>
        </div>
      </div>
      <div className="pageContent">
        <div className="blogcontent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos
          ut, placeat sit porro quisquam natus expedita. Fugit praesentium saepe
          cupiditate voluptatibus delectus vero ipsam! Tenetur error inventore
          in quibusdam incidunt odio eum officia repellat rerum sed alias
          deserunt veniam cupiditate explicabo perferendis sit est aliquam,
          corrupti temporibus fugiat! Quo qui error veritatis, voluptatibus quia
          at eveniet vel obcaecati corporis magni, molestiae commodi debitis?
          Eum dolore numquam nemo odit eaque fugiat id quod voluptatem hic,
          atque, repellat deserunt distinctio fuga nihil eos. Sed nisi a
          consequatur expedita pariatur nulla ea esse molestiae molestias cum.
          Obcaecati soluta blanditiis itaque delectus iusto, provident ea vero
          fugiat officia optio necessitatibus maxime accusamus, quae debitis
          nisi placeat aut iste ipsa in quod assumenda. Possimus fugiat, ullam
          repellat earum culpa pariatur minus laudantium perspiciatis doloribus.
          Esse atque consectetur adipisci aliquid, magnam, dignissimos excepturi
          deleniti fugit corrupti incidunt laudantium expedita recusandae,
          voluptas pariatur? Quibusdam dolorem quisquam animi distinctio
          voluptate quod, deleniti laboriosam similique natus, voluptas dolorum
          doloremque assumenda sint, fuga impedit reiciendis sapiente tempore
          eum minima ipsam. Vitae rerum deleniti quam ullam natus consequatur
          molestias. Necessitatibus, excepturi dignissimos nihil aut iusto fugit
          illo aperiam sit, voluptatibus esse repudiandae modi reiciendis.
          Perferendis unde, dolores, officia explicabo similique odio magnam
          ducimus rem nobis dignissimos minima, accusamus earum vitae deleniti
          in architecto obcaecati quis laborum aperiam ratione corrupti modi!
          Impedit obcaecati et consectetur? Dolores possimus quasi corrupti
          tempora dolorum tenetur, neque aperiam qui laboriosam deleniti
          deserunt saepe obcaecati amet? Quae amet doloribus atque beatae
          temporibus omnis, impedit aspernatur rerum asperiores facere natus
          quod necessitatibus ullam quidem officia enim sed dolore eius? Nulla
          veritatis consectetur ipsam, suscipit vitae quam quae! Beatae quas
          doloribus error in veniam tenetur rem recusandae, suscipit ratione
          impedit illo consectetur blanditiis nemo ducimus deleniti?
          Perferendis, saepe! Accusantium blanditiis soluta et assumenda
          reiciendis rem placeat. Eaque eius ipsum ratione nemo repudiandae.
          Praesentium enim autem cupiditate consectetur vel debitis nostrum
          consequuntur aliquam obcaecati ad dolor rem accusantium aut eaque
          totam, est quos quod provident. Consectetur unde corrupti delectus
          fugit maxime adipisci, ullam tempora minima, perspiciatis dicta
          nesciunt magni! Laudantium tenetur maxime nulla quae quisquam
          excepturi blanditiis quod, temporibus deserunt quis ea molestiae,
          dicta distinctio a ducimus. Hic veniam ipsa ea, odit non beatae
          molestiae minima architecto, consequatur magni dolorem tempora
          mollitia quo veritatis. Omnis unde, commodi repellendus quod
          voluptatibus sit veritatis ab minima. Iste odit autem quaerat ducimus
          adipisci facere, dolores tempore dicta est? Similique velit aspernatur
          quis, ex officiis id necessitatibus maxime accusamus rerum beatae
          veritatis provident aliquam pariatur ipsum facilis exercitationem
          eveniet? Perspiciatis, quam fugiat? Eos voluptate consectetur optio
          voluptatibus. Culpa repellat voluptas quaerat nemo quas amet ipsa,
          perspiciatis suscipit unde impedit laudantium dignissimos debitis
          eaque velit aspernatur corporis, quo fugit. Tempora laboriosam
          perspiciatis dolores sit repellendus a temporibus, labore explicabo
          sed numquam repellat dolore possimus non, dolor expedita id deleniti
          minus adipisci magnam rerum beatae eum unde rem. Culpa, tenetur? Autem
          rerum quibusdam voluptatem tenetur eius. Vitae sed deserunt magnam
          illum corrupti doloribus tempora, sapiente cupiditate possimus nobis
          blanditiis repellat voluptate voluptates animi repudiandae architecto.
        </div>
        <div className="rightside">
          <div id="searchbar">
            <input type="search" name="" id="search" />
            <button>search</button>
          </div>
          <div className="popularblogs">
            <h5>Popular Posts</h5>
          </div>
          <div className="populartags">
            <h5>Tags</h5>
          </div>
          <div className="popularCategory">
            <h5>Categories</h5>
          </div>
          <div className="iconsblog">
            <button
              onClick={() =>
                openInNewTab("https://www.facebook.com/your-page-url")
              }
            >
              <img src={"/assets/fb-logo.png"} alt="facebook" />
            </button>
            <button
              onClick={() => openInNewTab("https://twitter.com/login?lang=en")}
            >
              <img src={"/assets/twitter-logo.png"} alt="twitter" />
            </button>
            <button onClick={() => openInNewTab("https://www.instagram.com/")}>
              <img src={"/assets/insta-logo.png"} alt="insta" />
            </button>
          </div>
          <div id="motivationalImage">
            <img src={"/assets/motivational.jpg"} alt="" />
          </div>
        </div>
      </div>
      <div className="changepostcontainer">
        <div className="changePost">
          <button>
            <img src={"/assets/left.png"} alt="previous" /> Prev Post
          </button>
          <button>
            Next Post <img src={"/assets/right.png"} alt="next" />
          </button>
        </div>
      </div>
      <Comment />
      <Footer />
    </div>
  );
};

export default SinglePage;
