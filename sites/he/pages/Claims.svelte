<script>
    import Hero from '../../../src/components/claims/Hero.svelte'
    import Bullets from '../../../src/components/claims/Bullets.svelte'
    import HowItWorks from '../../../src/components/claims/HowItWorks/HowItWorks.svelte'
</script>

<Hero/>
<Bullets/>
<HowItWorks/>

<style lang="scss" global>

  @mixin mobile-sm-up {
    @media (min-width: 480px) {
      @content;
    }
  }

  @mixin tablet-up {
    @media (min-width: 768px) {
      @content;
    }
  }

  @mixin tablet-large-up {
    @media (min-width: 1024px) {
      @content;
    }
  }

  @mixin desktop-up {
    @media (min-width: 1330px) {
      @content;
    }
  }

  @mixin desktop-xl-up {
    @media (min-width: 1920px) {
      @content;
    }
  }

  @mixin desktop-xxl-up {
    @media (min-width: 2500px) {
      @content;
    }
  }


</style>