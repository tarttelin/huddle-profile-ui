import React, { useState } from 'react';
import { Route } from 'wouter';
import Button from './components/atoms/Button';
import NavDrawer from './components/atoms/NavDrawer';
import NavItem from './components/atoms/NavItem';
import Auth, { loadUser } from './auth/Auth';
import { User } from './auth/User';
import Header from './components/atoms/Header';
import './main.css';

function App() {
  const [user, setUser] = useState(() => loadUser());
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  let title = import.meta.env.OPS_TITLE;
  let authUrl = import.meta.env.OPS_AUTH_URL;
  let qs = `redirect_uri=${encodeURIComponent(import.meta.env.OPS_AUTH_REDIRECT!!)}&response_type=token&client_id=${import.meta.env.OPS_AUTH_CLIENT_ID}&identity_provider=COGNITO&scopes=email%2Cprofile%2Copenid&state=Te0hKuTqkLpIx1o02viQVaitt1p6aRRK`;
  return (
    <>
      <Header toggleMainMenu={toggleMainMenu} setToggleMainMenu={setToggleMainMenu} toggleUserMenu={toggleUserMenu} setToggleUserMenu={setToggleUserMenu}/>
      
      <div className="main">
        { user ? <span>User: {user.name}</span> : <Button as="a" href={`${authUrl}?${qs}`}>Login</Button>}
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam maxime facere eligendi id ratione placeat inventore voluptas expedita, earum incidunt veniam. Tempora incidunt porro vel nobis placeat totam sequi non error alias atque sapiente cupiditate explicabo minima facere inventore quis repudiandae molestiae quisquam, sed aspernatur deserunt expedita! Veniam facere sapiente, sint eveniet ea quaerat laudantium! Eveniet, nostrum rem assumenda minus sint asperiores, atque amet, illum blanditiis repudiandae quod totam. Ab, numquam nostrum iusto autem quod fugit. Molestiae adipisci non ipsam ullam consequatur doloribus dignissimos cupiditate alias! Cupiditate cumque sed rerum corrupti dignissimos culpa? Esse alias fuga perspiciatis iusto consequatur molestias laborum asperiores explicabo, nulla rerum minus delectus vero quos libero! Fugiat modi quas exercitationem, non laboriosam totam omnis animi, cupiditate quo accusamus praesentium magnam inventore, saepe soluta sed! Aut accusamus exercitationem pariatur quos error, numquam cum itaque, veritatis qui iusto architecto ea? Unde, officia dolore cumque libero molestias tempore architecto vel? Quam impedit expedita exercitationem numquam vel, corrupti dolorem praesentium eum voluptas. Odit dolorum enim fuga consequatur. Reiciendis mollitia expedita voluptatibus, odio perferendis debitis inventore magnam totam officiis vitae quod perspiciatis dignissimos nesciunt neque quos labore sit. Voluptatibus cupiditate ut explicabo iure officiis culpa repellendus ratione aliquid asperiores facere esse temporibus, assumenda necessitatibus cumque architecto, magni quo voluptatem commodi non id recusandae maiores tempore! Sapiente temporibus, iure exercitationem impedit blanditiis aspernatur mollitia, rem natus quod doloribus excepturi sint magni harum sit nostrum, error eius ratione! Ut unde dolore, porro qui cum cumque excepturi neque harum reprehenderit aperiam id officiis soluta nobis totam nostrum. Nam maiores unde quisquam ex nemo repellendus quis iste eligendi debitis fugit nostrum minus magnam, tempore culpa quae corporis qui, repudiandae perferendis nulla voluptatum. Odio deserunt eos accusantium soluta possimus aperiam pariatur laudantium iure dolor sapiente nihil temporibus ratione, animi numquam amet quas minima odit reiciendis esse porro. Maiores, dicta? Cupiditate doloremque ea earum nam reiciendis ipsam perferendis, qui est dolorum, maxime a quis at blanditiis deserunt illo, excepturi tenetur voluptatibus similique corrupti et soluta consequuntur! Inventore officia qui sunt enim beatae praesentium libero, aliquam autem explicabo maiores quam illum, fugiat eligendi, quisquam laboriosam esse consectetur rem alias nisi non! Sapiente voluptate, numquam pariatur incidunt dolor dolore dicta iure molestiae! Libero provident ex praesentium unde, voluptatem repellat ad vero, iure architecto, aliquam animi nostrum. Possimus earum, sequi, velit omnis reprehenderit esse atque quisquam, debitis accusamus deleniti veniam quasi. Laboriosam ducimus quis illum dolorum temporibus itaque nesciunt quidem inventore, alias deleniti nam quisquam sequi ex fugit neque repellat? Deserunt id sed voluptates nobis possimus laboriosam molestiae mollitia? Ipsa voluptas harum facilis accusamus! Officia aut perspiciatis necessitatibus porro iusto. Tempora cupiditate eveniet quas perspiciatis! Eius mollitia recusandae odio earum voluptatum explicabo dignissimos. Tempora atque voluptatem veniam repudiandae aut dolores ducimus. Porro, neque? Aspernatur officiis sequi obcaecati temporibus quo, aperiam modi atque repellat voluptatibus dolor beatae repellendus expedita soluta at perspiciatis ipsum animi qui accusantium, iste voluptatum corporis, asperiores quam. Sunt obcaecati commodi id non est ea quo repellendus rerum doloremque voluptate. Quis numquam eum, quaerat quos quisquam sed nam atque velit cumque pariatur molestias alias ex quia et, qui consectetur! Aliquid perferendis numquam culpa quibusdam asperiores nostrum iure accusamus voluptatem quo, esse id inventore adipisci unde laborum. Rem, illo. Corrupti perspiciatis, error est quaerat, voluptatum vitae obcaecati aspernatur dicta cum quidem veniam quas laboriosam illo sequi animi libero impedit omnis nobis. Esse, ad aut fugiat illum porro impedit! Est, recusandae perspiciatis odio unde doloribus neque natus eligendi ullam sed, consectetur doloremque possimus, delectus consequatur? Laboriosam dolor distinctio voluptate delectus fugit veniam hic ullam blanditiis, expedita quod dignissimos dolorem tempora debitis! Rerum, error neque minus voluptatibus nisi magnam non iste architecto illo molestiae optio quidem sequi numquam a, doloremque nulla fuga. Vero ut architecto doloribus sapiente tempora natus voluptas reiciendis recusandae nam placeat commodi laboriosam laborum, nisi aut. Voluptates aliquam, ipsam non debitis officia minima a fuga deleniti, modi soluta similique explicabo perferendis nam maxime? Iusto nulla quia, soluta consectetur ipsum ipsam? Tenetur rem dignissimos ipsa a sapiente quidem ducimus dolor quibusdam! Quo, vel dolorem in sunt eligendi aliquam omnis hic, eius earum reiciendis excepturi enim molestiae vitae delectus ducimus veritatis alias quos numquam inventore voluptates. Similique temporibus ipsam at debitis maiores suscipit rem animi, obcaecati cupiditate quod cum distinctio id laudantium non veritatis in impedit nostrum enim qui dolorem natus deleniti incidunt esse eligendi. Itaque labore, exercitationem distinctio quaerat non reiciendis saepe illo error earum. Doloribus repellat autem recusandae nihil vero facere cum asperiores eaque optio, modi accusantium aliquid quisquam omnis doloremque non quae repudiandae et numquam maiores fugiat fuga, ipsa minima! Consequatur tempore dolorum eveniet debitis earum libero ipsum, aut voluptas accusamus culpa quisquam obcaecati incidunt a. Architecto modi nobis at nesciunt incidunt voluptatem numquam unde fugiat vel atque eum consectetur quod, neque praesentium eaque, amet dolor ipsa ipsum. Iure quis officiis odit nam vel? Nesciunt provident facilis officiis nostrum corporis velit fuga nisi a placeat, commodi quis, cumque excepturi minus ea eum id exercitationem. Omnis perspiciatis sint molestias cupiditate fugit veniam eos pariatur dolore non cum accusantium provident, eligendi porro amet itaque? Dolorem nesciunt voluptate quia debitis? Fugit quaerat sint hic quia? Placeat minus voluptas pariatur, sint quidem minima tempore mollitia earum voluptates vel. Quae incidunt eos nemo voluptatem aut? Laudantium soluta quidem, quibusdam laborum sint similique ipsam qui maxime sunt libero excepturi facilis vitae distinctio at in cumque ipsum. Itaque maxime quam libero corporis ducimus aperiam molestias facere reprehenderit. Quas deleniti totam veniam dolore, saepe repellendus quis eveniet reiciendis molestias optio praesentium facere voluptatem placeat dicta doloremque beatae sint eligendi sapiente! Nobis doloremque qui dignissimos omnis hic nostrum animi, voluptatum tempore sed harum nam mollitia distinctio reiciendis quod rem enim vitae consequuntur delectus itaque similique unde ex eveniet! Dignissimos, explicabo commodi rem est et, nulla doloremque facere, ab blanditiis reiciendis laborum voluptates exercitationem! Ipsam obcaecati voluptatibus rerum nesciunt voluptate nihil sunt saepe? Quos aliquam doloribus doloremque suscipit, fuga, molestiae harum unde quas necessitatibus ipsam placeat porro sunt iusto dicta illum voluptate voluptatum. Optio possimus non voluptatem, ratione enim eveniet praesentium modi ipsa. Deleniti, officiis dolorum!
      <Route path="/auth-callback" component={() => <Auth setUser={setUser} user={user} />} />
      </div>

      <NavDrawer isOpen={toggleMainMenu} side="left">
        <NavItem side="left" text="Home"/>
        <NavItem side="left" text="Profile"/>
        <NavItem side="left" text="Timesheets"/>
      </NavDrawer>

      <NavDrawer isOpen={toggleUserMenu} side="right">

        <NavItem side="right" text="Logout"/>  
        <NavItem side="right" text="Profile"/>
        <NavItem side="right" text="Preferences"/>
      </NavDrawer>

      <div className="footer">
        Some footer
      </div>
      
    </>
  )
}

export default App
