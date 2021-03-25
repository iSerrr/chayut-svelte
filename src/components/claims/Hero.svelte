<script>

</script>

<section class="hero">

    <div class="hero__banner">
        <div class="hero__banner-container">
            <img class="hero__img right" src="/assets/img/claims/hero/banner-bg.svg"/>
            <img class="hero__img left" src="/assets/img/claims/hero/banner-bg.svg"/>
            <img class="hero__img center" src="/assets/img/claims/hero/banner-room.svg"/>
            <img class="hero__img center" src="/assets/img/claims/hero/banner-front-elements.svg"/>
            <img class="hero__img center" src="/assets/img/claims/hero/banner-extra-elements.svg"/>
        </div>
    </div>

    <div class="ts-width-limiter">
        <div class="hero__content-wrapper">
            <div class="hero__content">
                <h1 class="main hero__title">
                    תביעות בחיותא.<br class="break-primary"><br class="break-desktop"><br class="break-480"> אנו עובדים.
                    לא אתם
                </h1>
                <h2 class="sub hero__desc">
                    <p>אולי זו פציעה קלה. אולי בדיקת מעבדה. אולי ניתוח. או<br class="break-480"> כל צרה אחרת. <br
                            class="break-768"><br class="break-desktop">הדבר האחרון שצריך פה – הוא הר של<br
                            class="break-480"> ניירת. <br class="break-desktop">לכן, בחיותא החלטנו להקדים קצת תחקור
                        (ולמנוע<br class="break-480"><br class="break-desktop"> טרטור)</p>
                </h2>
            </div>
        </div>

    </div>
</section>

<style lang="scss">
  @import "../../styles/theme/load-only-mixins";


  .hero {
    margin: -2px 0;

    .break-desktop {
      display: none;
    }

    .break-768 {
      display: none;
    }

    .break-480 {
      display: none;
    }

    @include tablet-up {
      .break-primary {
        display: none;
      }
      .break-desktop {
        display: none;
      }
      .break-480 {
        display: none;
      }
      .break-768 {
        display: block;
      }
    }

    @include desktop-up {
      .break-768 {
        display: none;
      }
      .break-desktop {
        display: block;
      }
      .break-primary {
        display: none;
      }
    }

    &__banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      max-height: 628px;
      overflow: hidden;
      background: #D28E7E;

      @include mobile-sm-up {
        max-height: 738px;
      }

      @include tablet-up {
        max-height: 849px;
      }

      @include desktop-up {
        max-height: 723px;
      }

      @include desktop-xl-up {
        max-height: 761px;
      }
    }

    &__banner-container {
      width: 100%;
      height: 86%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      @include tablet-up {
        height: 100%;
      }

      @include desktop-up {
        height: 120%;
      }
      @include desktop-xl-up {
        height: 134%;
      }
    }


    &__img {
      object-fit: cover;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      height: 100%;
      max-width: unset;

      &.center {
        left: 49%;
      }

      @include mobile-sm-up {
        &.center {
          left: 50%;
        }
      }

      @include tablet-up {
        &.center {
          left: 48%;
        }
      }

      @include tablet-large-up {
        &.center {
          left: 50%;
        }
      }

      @include desktop-up {
        &.center {
          left: 26%;
        }
      }
      @include desktop-xl-up {
        &.center {
          left: 34%
        }
      }

      @include desktop-xxl-up {
        &.left {
          left: 0;
          transform: translateX(0);
        }
        &.right {
          right: 0;
          left: auto;
          transform: translateX(0);
        }
        &.center {
          left: 38%;
        }
      }
    }

    &__content-wrapper {
      position: relative;
      max-height: 628px;
      height: 100vh;
      width: 100%;

      @include mobile-sm-up {
        max-height: 738px;
      }

      @include tablet-up {
        max-height: 849px;
      }

      @include desktop-up {
        max-height: 723px;
      }

      @include desktop-xl-up {
        max-height: 761px;
      }
    }

    &__content {
      width: 100%;
      padding: 85px 19px 0;
      margin: 0 auto;
      color: #fff;
      text-align: center;
      font-family: "PracticaNarrow", Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;

      @include tablet-up {
        padding: 95px 40px 0;
      }
      @include tablet-large-up {
        padding: 80px 40px 0;
      }

      @include desktop-up {
        max-width: 1120px;
        text-align: right;
        align-items: flex-start;
        padding: 200px calc((100vw - 1330px) / 5) 0;
      }

      @include desktop-xl-up {
        max-width: 1280px;
        padding: 200px 0 0;
      }

      @include desktop-xxl-up {
        max-width: 1286px;
        padding: 200px 0 0;
      }
    }

    &__desc, &__title {
      font-weight: normal;
      max-width: 666px;

      @include tablet-large-up {
        max-width: 916px;
      }

      @include desktop-up {
        max-width: 401px;
      }
    }

    &__title {
      font-size: 40px;
      line-height: 100%;

      @include tablet-up {
        font-size: 52px;
      }

      @include tablet-large-up {
        margin-bottom: 10px;
      }
      @include desktop-up {
        margin-bottom: 15px;
      }
    }

    &__desc {
      font-family: 'Practica', Arial, sans-serif;
      font-size: 17px;
      line-height: 130%;

      @include tablet-up {
        font-size: 21px;
        line-height: 28px;
      }
    }
  }

</style>