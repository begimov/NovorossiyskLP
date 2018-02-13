<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-white">
      <div class="container">
        <div class="row">
          <div class="col"><img src="../assets/logo.png" class="logo" width="110"></div>
          <div class="col text-right"><span class="badge badge-primary">БЕСПЛАТНО</span></div>
        </div>
        <h1 class="display-4 d-none d-sm-block"><strong>Мастер-класс &laquo;Как создать систему управления компанией&raquo;</strong></h1>
        <h1 class="display-5 d-sm-none"><strong>Мастер-класс &laquo;Как создать систему управления компанией&raquo;</strong></h1>
        <p class="lead header-date">г. Новороссийск, ул. Анапское шоссе, 18&nbsp;Отель &laquo;Бригантина&raquo;, Конференц-зал</p>
        <p class="lead"><span class="badge badge-light">15&nbsp;февраля в&nbsp;18.00 Мск</span></p>
      </div>
    </div>

    <div class="container">

      <div class="row text-center">
        <div class="col">
          <h3>Для онлайн-участия, пожалуйста, зарегистрируйтесь ниже. Мы&nbsp;пришлем вам ссылку на&nbsp;трансляцию!</h3>
        </div>
      </div>
      <div class="row text-center" ref="join-block">
        <div class="col" style="margin-top:30px">
          <h2>Форма регистрации</h2>
        </div>
      </div>
      <div class="row last-row text-center">
        <div class="col">
          <Grform 
            campaign_token="nwjhI"
          />
        </div>
      </div>

      <div class="row last-row" style="margin-top:80px; font-family: 'Playfair Display', serif;">
        <div class="col-md-3" style="margin-bottom:20px;">
          <img class="img-fluid" src="../assets/kochnev.jpg">
        </div>
        <div class="col-md-9">
          <h3 style="margin-bottom:20px;">Ведущий наставник проекта&nbsp;&mdash; управляющий партнер iTeam Александр Кочнев. 15&nbsp;лет помогает компаниям выйти на&nbsp;новый уровень.</h3>
          <p><img class="img-fluid" src="../assets/client_logos.jpg"></p>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <h2>Отзывы наших участников:</h2>
        </div>
      </div>
      <div class="row text-center last-row">
        <div class="col-md-6">
          <h5>Александр Красный, &laquo;ГаРус&raquo;</h5>
            <p><a href="http://groupautorus.ru/" target="_blank"><img src="https://iteam.ru/landing/template/img/logo_garus.png" class="img-fluid rounded"></a></p>
            <div class="embed-responsive embed-responsive-16by9" style="margin-bottom:30px;">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Rp4Jh-DP7is" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="col-md-6">
          <h5>Александр Соловьев, &laquo;FIS&raquo;</h5>
          <p><a href="http://neofood.de/" target="_blank"><img src="https://iteam.ru/landing/template/img/logo_neofood.png" class="img-fluid rounded"></a></p>
          <div class="embed-responsive embed-responsive-16by9" style="margin-bottom:30px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/U4QFO0ILnmE" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-md-6">
          <h5>Геннадий Черкасов, &laquo;Миг Плюс&raquo;</h5>
          <p><a href="http://migplus.ru/" target="_blank"><img src="https://iteam.ru/landing/template/img/logo_migplus.png" class="img-fluid rounded"></a></p>
          <div class="embed-responsive embed-responsive-16by9" style="margin-bottom:30px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/C2MVqTRj40w" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-md-6">
          <h5>Яна Ходак, &laquo;МК&nbsp;Практик&raquo;</h5>
          <p><a href="http://practicmed.ru/" target="_blank"><img src="https://iteam.ru/landing/template/img/logo_mkpraktik.png" class="img-fluid rounded"></a></p>
          <div class="embed-responsive embed-responsive-16by9" style="margin-bottom:30px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rlzpDK1my58" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./home.js"></script>

<style scoped>
.header-title {
  margin-top: 30px;
}
.header-date {
  margin-top: 20px;
  margin-bottom: 10px;
}
.badge {
  font-size: 1.1em;
}
.last-row {
  margin-bottom: 50px;
}
h2 {
  margin-bottom: 20px;
}
.jumbotron {
  padding-top: 20px;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}
.container-fluid {
  padding: 20px 10px;
  margin-bottom: 50px;
}
.changes-block {
  background-image: url("../assets/bg_block_01.jpg");
  background-size: cover;
}
.card-header-anapa {
  background-image: url("../assets/bg_block_anapa.jpg");
  background-size: cover;
  height: 200px;
  padding: 20px;
}
.nav-tabs-links a {
  color: #fff;
  text-decoration: underline;
}
.logo {
  margin-bottom: 20px;
}
.card-accent {
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  border-width: 2px;
}

@media (max-width: 767.98px) {
  .header-title {
    margin-top: 20px;
  }
}
@media (max-width: 575.98px) {
  .header-title {
    margin-top: 10px;
  }
}
</style>
