<template>
  <div>
    <cookie-law position="bottom">
      <div slot-scope="props">
        <span
          class="CoockieText"
        >This website uses cookies to ensure you get the best experience on our website, for more info
          <nuxt-link to="legal-notes">Click here</nuxt-link>
        </span>
        <button class="Cookie__button CookieButton" @click="props.accept">
          <span>I accept</span>
        </button>
        <button class="CookieButton Cookie__button" @click="props.close">
          <span>Ignore me</span>
        </button>
      </div>
    </cookie-law>
  </div>
</template>

<style scoped>
.CoockieText {
  margin-right: 2rem;
}
.Cookie--base .Cookie__button {
  background: #f1f1f1;
  color: black;
  border: solid 1px #eb456e;
  font-weight: bold;
}
.Cookie--base .Cookie__button:hover {
  background: #eb456e;
  color: white;
}
</style>
