<script>

</script>

<section class="bullets">

    <ul class="bullets__list">

        <li class="bullets__column">
            <div class="bullets__imgBx">
                <img src="/assets/img/claims/bullets/img-001.svg" alt="bullets-img-001" class="bullets__img">
            </div>
            <h3 class="bullets__title">ציון חיותא ברשתות
                החברתיות</h3>
        </li>

        <li class="bullets__column">
            <div class="bullets__imgBx">
                <img src="/assets/img/claims/bullets/img-002.svg" alt="bullets-img-002" class="bullets__img">
            </div>
            <h3 class="bullets__title">כל רבע שעה משולמת
                תביעה בחיותא</h3>
        </li>

        <li class="bullets__column">
            <div class="bullets__imgBx">
                <img src="/assets/img/claims/bullets/img-003.svg" alt="bullets-img-003" class="bullets__img">
            </div>
            <h3 class="bullets__title">מהתביעות בחיותא נסגרות
                תוך שבוע</h3>
        </li>

    </ul>

</section>

<style lang="scss">
  @import "../../styles/theme/load-only-mixins";

  .bullets {
    margin: -2px 0;
    position: relative;
    background: rgb(255, 255, 255);

    &__list {
      margin: 0 auto;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 100%;
      padding: 0 20px 35px;
      flex-wrap: wrap;

      @include mobile-sm-up {
        padding:0 0 57px;
      }

      @include tablet-up {
        max-width: 750px;
        padding: 0 20px 65px;
      }

      @include tablet-large-up {
        max-width: 1000px;
        padding: 0 20px 85px;
      }

      @include desktop-xl-up {
        padding: 0 20px 105px;
        max-width: 1031px;
      }

      @include desktop-xxl-up {
        max-width: 1100px;

      }
    }

    &__column {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 160px;
      margin: 0 auto 26px;

      &:last-child {
        margin: 0 auto;
      }

      @include mobile-sm-up {
        height: 180px;
        margin: 0 auto 26px;
      }

      @include tablet-up {
        margin: 0;
        &:last-child {
          margin: 0;
        }
      }

      @include tablet-large-up {
        height: 235px;
      }
    }

    &__imgBx {
      height: calc(85/375 *100vw);
      margin-bottom: 5px;

      @include mobile-sm-up {
        height: 129px;
      }

      @include tablet-large-up {
        height: 171px;
      }

      @include desktop-xxl-up {
        height: 189px;
      }
    }

    &__img {
      height: 100%;
    }

    &__title {
      text-align: center;
      font-family: 'PracticaNarrow', Arial, sans-serif;
      font-weight: bold;
      font-size: 18px;
      color: #181D23;
      max-width: 140px;

      @include tablet-large-up {
        font-size: 22px;
        max-width: 174px;
      }
    }
  }
</style>