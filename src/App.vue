<template>
  <div>
    <div
      :style="{ width: sideBar ? '250px' : '0px' }"
      id="side-nav"
      class="side-nav"
    >
      <img src="./assets/logo.png" alt="" />
      <i class="fas fa-times close-button" @click="sideBar = false"></i>
      <ul>
        <li><a href="#about">HAKKIMDA</a></li>
        <li><a href="#things-i-made">YAPTIĞIM İŞLER</a></li>
        <li><a href="#comments">YORUMLAR</a></li>
        <li><a href="#contact">İLETİŞİM</a></li>
      </ul>
    </div>
    <div class="modal" :style="{ display: sideBar ? 'block' : 'none' }"></div>
    <div class="navbar">
      <div class="left">
        <img src="./assets/logo.png" alt="logo" />
      </div>
      <div class="right">
        <i @click="sideBar = sideBar ? false : true" class="fas fa-bars"></i>
        <ul>
          <li><a href="#about">HAKKIMDA</a></li>
          <li><a href="#things-i-made">YAPTIĞIM İŞLER</a></li>
          <li><a href="#comments">YORUMLAR</a></li>
          <li><a href="#contact">İLETİŞİM</a></li>
        </ul>
      </div>
    </div>
    <div class="hero">
      <div class="hero-left">
        <h3>Merhaba,</h3>
        <h3>ben</h3>
        <h2>Haktan Sefa Pasin</h2>
        <h1>Jr Software Web Developer</h1>
      </div>
      <div class="hero-right">
        <img src="./assets/me.png" alt="me" />
      </div>
    </div>
    <div id="about" class="about">
      <h1>Hakkımda</h1>
      <div class="about-me">
        <p>
          Merhaba, ben Haktan. Yaklaşık 7 aydır yazılım sektörü içerisindeyim ve
          yaklaşık 2 aydır kendimi Jr. Web Developer olarak hissediyorum. Uzun
          süren kendimi arama döneminin sonunda yazılım ile bir şeyleri
          değiştirebileceğimi farkettim. Ardından kod yazmak benim için bir
          tutkuya dönüştü. C++ ile başlayan yazılım hayatım C# ve .Net mimarisi
          ile dernek programı gibi yazılımsı programlar oluşturduktan sonra
          Javascript ile tanıştım. Yaklaşık olarak 4 aydır Javascript ile
          uğraşıyorum ve iyi derecede Angular, temel düzeyde React ve çok iyi
          derecede Vue biliyorum. Bir ara Flutter ile uğraştım ve mobil
          tasarımların web için nasıl olması gerektiği konusunda bilgilendim. Bu
          7 aylık sürenin hemen her günü çalıştığım dil dışındaki teknolojileri
          araştırdım. Vue ile tanıştıktan sonra da Vue.js gibi bir framework
          için yeterli seviyede bir Türk topluluğu olmadığını farkettim ve
          vuejstr.com sitesini kurdum. Amacım Vue.js Türkiye topluluğunu kurmak.
          Hala da araştırmam devam ediyor. Son olarak, Vue.js ile Stackoverflow
          tarzı bir proje geliştiriyorum. DAHA ÖNCE HİÇ PORTFOLYO SİTESİ
          HAZIRLAMAMIŞTIM. BU FIRSATI TANIDIĞINIZ İÇİN TEŞEKKÜRLER..
        </p>
      </div>
      <h3>Haktan Sefa Pasin</h3>
      <div class="media-links">
        <a href="https://github.com/oldner"><i class="fab fa-github"></i></a>
        <a href="https://oldner.medium.com/"><i class="fab fa-medium"></i></a>
        <a href="https://www.linkedin.com/in/haktan-sefa-pasin-7425601b1/"
          ><i class="fab fa-linkedin-in"></i
        ></a>
      </div>
    </div>
    <div id="things-i-made" class="things-i-made">
      <h1>Yaptığım işler</h1>
      <div class="gallery">
        <div class="g1">
          <img src="./assets/1.jpg" alt="job1" />
          <h3>Web site tasarımı</h3>
        </div>
        <div class="g2">
          <img src="./assets/2.jpg" alt="job1" />
          <h3>Backend hazırlama</h3>
        </div>
        <div class="g3">
          <img src="./assets/3.jpg" alt="job1" />
          <h3>Mobil uygulamalar</h3>
        </div>
        <div class="g4">
          <img src="./assets/4.jpg" alt="job1" />
          <h3>Portfolyö sitesi</h3>
        </div>
      </div>
    </div>
    <div id="comments" class="comments">
      <h1>Yorumlar</h1>
      <div class="comment-cards">
        <div class="card" v-if="johnComment">
          <div class="card-header">
            <h4>John Doe</h4>
            <span>01/06/2021 tarihinde gönderdi:</span>
            <i
              @click="removeComment(undefined)"
              class="fas fa-times"
              id="deneme"
            ></i>
          </div>
          <div class="card-comment">
            <p>This is a great website cong!</p>
          </div>
        </div>
        <div class="card" v-for="(com, index) in comments">
          <div class="card-header">
            <h4>{{ com.name }}</h4>
            <span>{{ com.time }} tarihinde gönderdi:</span>
            <i @click="removeComment(index)" class="fas fa-times"></i>
          </div>
          <div class="card-comment">
            <p>{{ com.content }}</p>
          </div>
        </div>
      </div>
      <h1>Yorum yapmak ister misiniz?</h1>
      <div class="comment-inputs">
        <div class="name-input">
          <input type="text" placeholder="Adınız" v-model="name" />
        </div>
        <div class="mail-input">
          <input type="text" id="email-input" placeholder="E-mail adresiniz" />
        </div>
        <div class="comment-input">
          <textarea
            placeholder="Yorumunuz"
            name="textarea"
            v-model="content"
          ></textarea>
          <button @click="addComment" class="send-comment-button">
            Gönder
          </button>
        </div>
      </div>
    </div>
    <div id="contact" class="contact">
      <h1>İletişim</h1>
      <div class="contact-items">
        <div class="contact-address">
          <i class="fas fa-map-marker-alt"></i>
          <p>Sahil Mah. İnce Sok. 13/5</p>
        </div>
        <div class="contact-mail">
          <i class="fas fa-envelope-open-text"></i>
          <p>haktansefapasin@gmail.com</p>
        </div>
        <div class="contact-phone">
          <i class="fas fa-phone"></i>
          <p>+90 545 321 56 18</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <span>Copyright @ 2021. Tüm hakları saklıdır.</span>
      </div>
      <div class="footer-right">
        <span>instagram</span>
        <span>twitter</span>
        <span>facebook</span>
        <span>pinterest</span>
      </div>
    </div>
  </div>
</template>

<script src="./script.js">
</script>

<style src="./style.css">
</style>
