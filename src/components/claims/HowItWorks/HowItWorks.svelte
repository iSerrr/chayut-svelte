<script>
    import {onMount} from 'svelte'
    import PhoneChat from './Phone/phone-chat'
    let testClasses = false

    onMount(() => {
        const phoneChat = new PhoneChat()
        phoneChat.bootstrap()
    })

</script>

<section class="how-it-works">
    <div class="how-it-works__wrapper">

        <h1 class="how-it-works__title _title">אז מה עליך לעשות?</h1>

        <div class="how-it-works__content">

            <div class="how-it-works__phone phone">
                <div class="phone__skeleton"></div>
                <ul class="phone__content">
                    <li class="phone__in-message" data-delay="2000">
                        <p>
                            איך אפשר לעזור?
                        </p>
                    </li>
                    <li class="phone__out-message" data-delay="2000">
                        <p>
                            אני רוצה להגיש תביעה
                        </p>
                    </li>
                    <li class="phone__in-message" data-delay="3000">
                        <p>
                            אין בעיה, אשאל אותך כמה שאלות על
                            מנת שנוכל להגיש את התביעה.
                        </p>
                        <p>
                            ספר לי בקצרה מה קרה.
                        </p>
                    </li>
                    <li class="phone__out-message" data-delay="4000">
                        <p>
                            אתמול בערב בוני בלע חבילה שלמה
                            של שוקולד. רצנו איתו לוטרינר והוא
                            עבר שטיפת קיבה
                        </p>
                    </li>
                    <li class="phone__in-message" data-delay="3000">
                        <p>
                            צרפו בבקשה צילום של סיכום הביקור
                            אצל הוטרינר.
                        </p>
                    </li>
                    <div class="phone__message-with-img" data-delay="4000">
                        <img class="phone__message-img" src="/assets/img/claims/how-to-works/message-with-img.svg"
                             alt="phone__message-img">
                    </div>

                    <button class="phone__btn" data-delay="4000">
                        <span>
                            הגש תביעה
                        </span>
                    </button>
                </ul>

            </div>

            <ul class="phone__prompt prompt {false&&'current'}">
                <li class="prompt__item prompt__item--step-1">
                    <h3 class="prompt__title">ספר מה קרה</h3>
                    <p class="prompt__desc">
                        פשוט הקלד כמה מילים (בלי טפסים ובלי נהלים)
                    </p>
                </li>

                <li class="prompt__item prompt__item--step-2">
                    <h3 class="prompt__title">העבר סיכום מחלה מן המרפאה </h3>
                    <p class="prompt__desc">
                        ממש כאן באופן מקוון (אין שום גיליון ולא נדרש
                        כל כישרון) ואם תרצה – נסביר בשיחת טלפון.
                    </p>
                </li>

                <li class="prompt__item prompt__item--step-3">
                    <h3 class="prompt__title">לחץ על שליחה </h3>
                    <p class="prompt__desc">וזהו. תן לעבוד עבורך!</p>
                </li>
            </ul>

        </div>

    </div>

</section>


<style lang="scss">
  @import "../../../styles/theme/load-only-mixins";
  @import "./index";
</style>