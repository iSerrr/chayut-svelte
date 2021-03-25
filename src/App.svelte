<script>
    import SiteHeader from './components/common/SiteHeader/SiteHeader.svelte'
    import SiteFooter from './components/common/SiteFooter/SiteFooter.svelte'

    export let language
    import Claims from '../sites/he/pages/Claims.svelte'
    import FrontPage from '../sites/he/pages/FrontPage/FrontPage.svelte'
</script>

<header class="header header--faded">
    <SiteHeader/>
</header>

<main>
    <FrontPage/>
</main>

<SiteFooter/>

<style lang="scss" global>
    @import "./styles/site.scss";

    ._title {
      font-family: 'PracticaNarrow', Arial, sans-serif;
      text-align: center;
      font-size: 32px;
      font-weight: normal;

      //@include tablet-up {
      //  font-size: 44px;
      //}
      //
      //@include tablet-large-up {
      //  font-size: 42px;
      //}
    }
</style>