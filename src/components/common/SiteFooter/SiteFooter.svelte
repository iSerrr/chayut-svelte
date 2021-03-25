<script>
    import FooterShell from './FooterShell/FooterShell.svelte'
</script>

<footer class="c-footer footer">
    <div class="footer__top">
        <div class="blogposts">
            <div class="blogposts__head">
                <h2 class="blogposts__title">ממגזין חיותא</h2>
                <h4 class="blogposts__subtitle"></h4>
            </div>
            <div class="blogposts__body">
                <div class="blogposts__slider chayuta-swiper-container">
                    <div class="blogposts__slider-clip chayuta-swiper-wrapper">
                        <div class="blogposts__slider-slide chayuta-swiper-slide chayuta-swiper-slide-active"
                             style="visibility: hidden"
                             data-swiper-slide-index="0">
                            <div class="box-blogpost"><a
                                    href="#"
                                    class="box-blogpost__link"></a>
                                <div class="box-blogpost__head">
                                    <div class="box-blogpost__image"></div>
                                </div>
                                <div class="box-blogpost__body">
                                    <h4 class="box-blogpost__category"></h4>
                                    <div class="box-blogpost__description"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blogposts__foot">
                <a href="./blog/"
                   class="c-link btn c-button c-button btn-link">עוד כתבות</a>
            </div>
        </div>
    </div>
    <div class="footer__main">
        <div class="footer__image-wrapper">
            <picture class="c-picture">
                <img src="/assets/img/frontpage/footer_img_new.svg" class="c-image c-picture__image" alt="" height="1351"
                     width="2501" loading="lazy"/>
            </picture>
        </div>
        <FooterShell/>
    </div>
</footer>

<style>
    @import "./src/styles/theme/load-only-mixins.scss";
    @import "_footer.scss";
</style>