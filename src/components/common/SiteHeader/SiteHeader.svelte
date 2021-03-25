<script>
    import Header from './header'
    import {onMount} from 'svelte'

    onMount(() => {
        const header = new Header()
        header.bootstrap()
    })
</script>

<div class="shell shell-fluid">
    <div class="ts-width-limiter">
        <div class="header__body">
            <div class="header__logo">
                <a class="logo" href="/"><img src="/assets/img/header/logo.svg" class="c-image logo__image" alt=""
                                              height="44" width="128"/>
                </a>
            </div>
            <div class="header__nav">
                <button class="btn-close-nav">
                    <i class="ico ico-close-nav"></i>
                </button>
                <ul id="menu-main-menu" class="nav nav-main">
                    <li
                            class="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="/why/">למה חיותא</a>
                    </li>
                    <li
                            class="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="/coverage/">מה מכוסה</a>
                    </li>
                    <li
                            class="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="/claims/">תביעות</a>
                    </li>
                    <li
                            class="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="/blog/">מגזין חיותא</a>
                    </li>
                </ul>
                <div class="header__nav-actions-mobile">
                    <ul class="c-button-collection">
                        <li class="c-button-collection__item">
                            <a href="tel:*6558" onclick="callClickedEvent('header');"
                               class="c-link btn c-button c-button btn-link">חייגו אלינו
                                6558*</a>
                        </li>
                        <li class="c-button-collection__item">
                            <a href="#"
                               class="c-link btn c-button c-button btn-primary-solid contactFormExec">לקבלת הצעת
                                מחיר</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header__nav-actions">
                <div class="header__links">
                    <ul>
                        <li>
                            <a href="tel:*6558" onclick="callClickedEvent('header');"
                               class="header__links-tel">6558*</a>
                        </li>
                    </ul>
                </div>
                <div class="header__button">
                    <a href="#"
                       class="c-link btn c-button c-button btn-primary-solid btn-primary-solid--wide menu-item contactFormExec">לקבלת
                        הצעת מחיר</a>
                    <div class="header__button--on-mobile">
                        <a href="#"
                           class="c-link btn c-button c-button btn-primary-solid menu-item contactFormExec">להצעת
                            מחיר</a>
                    </div>
                    <ul class="c-button-collection">
                        <li class="c-button-collection__item">
                            <a href="#"
                               class="c-link btn c-button c-button btn-primary-solid menu-item contactFormExec">לקבלת
                                הצעת מחיר</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header__burger">
                <button class="btn-nav"><span></span></button>
            </div>
        </div>
    </div>
</div>

<style>
    @import "./src/styles/theme/load-only-mixins.scss";
    @import "header.scss";
</style>