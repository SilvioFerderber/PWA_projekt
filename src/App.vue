<template>
  <div class="hakl">
    <div class="homepage">
      <div class="wrapper">
        <div class="logo">
          <img src="https://picsum.photos/60/60" alt="" />
        </div>
        <div class="navigation">
          <nav>
            <a href="#">Home</a>
            <a href="#">Sports</a>
            <a href="#">Events</a>
            <a href="#">Account</a>
          </nav>
        </div>
      </div>
    </div>

    <div class="header">
      <div class="wrapper">
        <h1>Choose your favourite sport and join an <span>event!</span></h1>
      </div>
    </div>

    <div class="sports">
      <div class="wrapper">
        <div class="sports_element">
          <img src="https://picsum.photos/50/50" alt="" />
          <h2>basketball</h2>
          <p>Play basketball on courts in your area</p>
        </div>
        <div class="sports_element">
          <img src="https://picsum.photos/50/50" alt="" />
          <h2>football</h2>
          <p>Play football on courts in your area</p>
        </div>
        <div class="sports_element">
          <img src="https://picsum.photos/50/50" alt="" />
          <h2>tennis</h2>
          <p>Play tennis on courts in your area</p>
        </div>
        <div class="sports_element">
          <img src="https://picsum.photos/50/50" alt="" />
          <h2>volleyball</h2>
          <p>Play volleyball on courts in your area</p>
        </div>
      </div>
    </div>

    <div class="about">
      <div class="wrapper">
        <h2>What are you up to?</h2>
        <h3>Looking for a quick matchup?</h3>
        <div class="about_content">
          <div class="about_content_text">
             <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            provident labore illum exercitationem fugiat dicta libero aperiam
            quia distinctio consequuntur veritatis eius, natus repellat error
            explicabo non at. Distinctio, quia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit voluptas, quidem sint alias
            sapiente iure aspernatur asperiores similique non ducimus, eos
            provident suscipit. Dicta culpa dolorum aliquam veniam quos nam!
          </p>
          </div>
          <img src="https://picsum.photos/300/300" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>

<style lang="scss">
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
p,h3,h2,h1,
a {
  font-family: "Roboto", sans-serif;
}
nav {
  display: flex;
  padding: 20px;
  max-width: 500px;
}
a {
  padding-right: 40px;
  color: white;
  text-decoration: none;
}
a:hover {
  color: #d69c15;
  transition: 200ms;
  transform: scale(1.2);
}
.wrapper {
  margin: 0 auto;
  max-width: 1300px;
}
.homepage {
  background-color: #171b20;
  padding: 50px 0;
  img {
    border-radius: 50%;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h1 {
      font-size: 100px;
    }
  }
}

.header {
  text-align: center;
  font-weight: bold;
  color: white;
  padding: 250px 0;
  background-image: url("https://picsum.photos/1900/1000");
  span {
    color: #ffbe25;
  }
}

.sports {
  background-color: #26292e;
  display: flex;
  padding: 20px;
  color: white;
  .wrapper {
    margin: -100px auto 100px;
  }
}
.sports_element {
  text-align: center;
  background-color: #1c1e20;
  border-radius: 30px;
  padding: 30px;
  margin-right: 20px;
  opacity: 0.9;
  img {
    border-radius: 50%;
  }
}
.sports_element:hover {
  opacity: 1;
  transition: 200ms;
  transform: scale(1.1);
}
.sports .wrapper {
  display: flex;
  justify-content: space-between;
}
.about {
  
  padding: 100px 0;
  background-color: #1c1e20;
  color: white;
  margin-top: -20px;
  h2 {
      color: #ffbe25;
      font-size: 40px;
    }
    p {
      font-size: 18px;
    }
  .about_content {
    display: flex;
    justify-content: space-between;
  }
  img {
    border-radius: 50%;
  }
  .about_content_text{
    max-width: 600px;
  }
}
</style>
