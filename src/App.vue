<template>
  <div id="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default {
  components: {
    Footer,
    Navigation,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
* {
  margin: 0;
  box-sizing: border-box;
}
p,
h3,
h2,
h1,
a {
  font-family: "Roboto", sans-serif;
}
nav {
  display: flex;
  padding: 20px;
  max-width: 500px;
  a {
    font-size: 18px;
    color: white;
    transition: 200ms;
    text-decoration: none;
    & + a {
      margin-left: 40px;
    }

    &:hover {
      color: #d69c15;
      transform: scale(1.2);
    }
  }
}
.home {
  .header {
    .wrapper {
      h1 {
        font-size: 80px;
      }
    }
  }
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

.home .header {
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
    flex-wrap: wrap;
    align-items: flex-start;
  }
}
.sports_element {
  transition: 200ms;
  width: 22%;
  text-align: center;
  background-color: #1c1e20;
  border-radius: 30px;
  padding: 30px;
  margin-right: 10px;
  opacity: 0.9;
  img {
    border-radius: 50%;
  }
}
.sports_element:hover {
  opacity: 1;
  transform: scale(1.1);
  h2 {
    color: #ffbe25;
    transition: 300ms;
  }
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
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 20px;
    color: #ffbe25;
    font-size: 50px;
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
  .about_content_text {
    max-width: 600px;
  }
}
.footer {
  padding: 50px 0;
  background-color: #26292e;
  footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  p {
    color: #ffbe25;
  }
  a {
    text-decoration: none;
    color: white;
    & + a {
      margin-left: 20px;
    }
  }
}
.sports_page {
  .header {
    position: relative;
    color: white;
    background-color: #1c1e20;
    margin-bottom: 100px;
    h1 {
      padding: 200px 0 50px 300px;
      background-image: url("https://picsum.photos/1900/800");
      font-size: 90px;
      color: #ffbe25;
    }
    h2 {
      margin: 100px 0 50px 0;
      font-size: 50px;
    }
  }

  .wrapper {
    position: relative;
  }

  .online {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(50%);
    transition: 500ms;
    border-radius: 80px;
    width: 300px;
    background-color: #d69c15;
    padding: 30px 70px;
    color: #1c1e20;
    .current_events {
      margin-bottom: 30px;
    }
  }
  .online:hover {
    color: white;
    transform: translateY(50%) scale(1.2);
  }

  .form {
    margin-left: auto;
    border-radius: 50px;
    width: 900px;
    margin-top: 50px;
    padding: 100px;
    background-color: rgb(245, 241, 241);

    input {
      
      transition: 500ms;
      border-radius: 20px;
      padding: 20px;
      border: 0;
      & + input {
        margin-left: 30px;
      }
      border-radius: 74px;
      background: #ffffff;
      box-shadow: 22px 22px 44px #c2c2c2, -22px -22px 44px #ffffff;
    }
    input:hover {
      transform: scale(1.1);
    }
  }

  .basketball_content {
    
    p {
      margin-bottom: 100px;
      max-width: 700px;
      margin-top: 20px;
    }
    h2 {
      font-size: 40px;
    }
  }
}
</style>
