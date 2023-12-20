<template>
  <div>
    <!-- NAVBAR -->
    <div class="w-full bg-white border-b">
      <div
        class="w-11/12 lg:w-10/12 mx-auto h-20 flex items-center justify-between"
      >
        <div>
          <h1 class="logo-text text-xl sm:text-2xl font-bold pt-3">
            Wordklang
          </h1>
        </div>
        <div class="hidden sm:flex items-center gap-x-8">
          <button class="text-sm sm:text-base text-black font-semibold">
            Features
          </button>
          <button class="text-sm sm:text-base text-black font-semibold">
            Pricing
          </button>
          <button class="text-sm sm:text-base text-black font-semibold">
            FAQ
          </button>
        </div>
        <div class="hidden sm:inline">
          <button
            class="w-28 sm:w-32 h-8 sm:h-9 bg-black text-sm sm:text-base text-white font-semibold rounded-md"
          >
            Get started
          </button>
        </div>
        <button
          class="inline sm:hidden w-20 h-8 bg-black text-white text-sm font-semibold rounded-md"
          @click="isMenuOpen = true"
        >
          Menu
        </button>
      </div>

      <USlideover v-model="isMenuOpen">
        <div class="w-10/12 mx-auto pt-5 flex items-center justify-between">
          <h1 class="logo-text text-xl sm:text-2xl text-center font-bold pt-3">
            Wordklang
          </h1>
          <button @click="isMenuOpen = false">
            <X />
          </button>
        </div>
        <div class="p-4 flex-1 flex flex-col items-center mt-10">
          <button class="text-base text-black font-semibold">Features</button>
          <button class="text-base text-black font-semibold mt-5">
            Pricing
          </button>
          <button class="text-base text-black font-semibold mt-5">FAQ</button>
        </div>
      </USlideover>
    </div>

    <!-- BANNER -->
    <div class="w-full py-20 flex items-center justify-center">
      <div>
        <p
          class="w-11/12 sm:w-[600px] mx-auto mt-3 text-4xl sm:text-5xl md:text-6xl text-black text-center font-medium"
        >
          Improve your japanese vocabulary and grammar.
        </p>
        <p
          class="w-10/12 w-full mx-auto mt-6 text-center text-lg sm:text-xl text-stone-600"
        >
          Improve your japanese level by learning new words, grammar points and
          daily expressions.
        </p>
        <button
          class="w-44 mx-auto h-10 bg-black text-white font-medium flex items-center justify-center rounded-md mt-10"
        >
          Start now
        </button>
      </div>
    </div>

    <!-- FEATURES -->
    <div class="w-full py-20">
      <p
        class="w-10/12 sm:w-[600px] mx-auto mt-3 text-3xl sm:text-4xl text-black text-center font-semibold"
      >
        How it works ?
      </p>
      <p
        class="w-10/12 mx-auto text-center text-base sm:text-lg text-stone-500 font-medium mt-5"
      >
        It's really easy and simple to use Wordklang for your daily learning
      </p>

      <div class="w-10/12 xs:w-9/12 sm:w-11/12 md:w-10/12 mx-auto mt-20">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-x-6">
          <div class="w-full sm:w-64 md:w-80 lg:w-96">
            <h3 class="text-xl md:text-2xl lg:text-3xl text-black font-bold">Vocabulary</h3>
            <p class="text-sm md:text-base text-stone-500 font-medium mt-3">
              With our 3,000-word library, enrich your vocabulary and practice
              forming more complex sentences. Get the meaning and using example
              of words
            </p>
          </div>
          <div class="w-full sm:w-1/2 mt-6 sm:mt-0">
            <img
              src="~assets/images/word-2.png"
              alt=""
              class="w-full mx-auto rounded-xl border-2 border-black shadow-lg"
            />
          </div>
        </div>

        <div class="flex flex-col-reverse sm:flex-row items-center justify-center gap-x-6 mt-24">
          <div class="w-full sm:w-1/2 mt-6 sm:mt-0">
            <img
              src="~assets/images/expression-2.png"
              alt=""
              class="w-full mx-auto rounded-xl border-2 border-black shadow-lg"
            />
          </div>
          <div class="w-full sm:w-64 md:w-80 lg:w-96">
            <h3 class="text-xl md:text-2xl lg:text-3xl text-black font-bold">Expressions</h3>
            <p class="text-sm md:text-base text-stone-500 font-medium mt-3">
              Memorize expressions that might be useful to you and use them in
              future conversations to express your emotions. See the expressions
              prononciation using romanji and their hiragana writing
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-x-6 mt-24">
          <div class="w-full sm:w-64 md:w-80 lg:w-96">
            <h3 class="text-xl md:text-2xl lg:text-3xl text-black font-bold">Grammar</h3>
            <p class="text-sm md:text-base text-stone-500 font-medium mt-3">
              Speak like native Japanese and develop your understanding of
              grammar. Learn to form correct sentences on the spot with the
              grammar usage and phrases example.
            </p>
          </div>
          <div class="w-full sm:w-1/2 mt-6 sm:mt-0">
            <img
              src="~assets/images/grammar-2.png"
              alt=""
              class="w-full mx-auto rounded-xl border-2 border-black shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- PRINCING -->
    <div class="w-full py-20">
      <p
        class="w-10/12 sm:w-[600px] mx-auto mt-3 text-4xl text-black text-center font-medium"
      >
        Pricing
      </p>
      <div class="flex items-center justify-center gap-x-3 mt-16">
        <p class="text-sm text-black font-medium">Monthly</p>
        <UToggle color="green" size="lg" v-model="selectedMode" />
        <p class="text-sm text-black font-medium">Yearly</p>
      </div>
      <div
        class="mt-10 w-11/12 xs:w-9/12 sm:w-full mx-auto flex flex-col sm:flex-row items-start justify-center gap-x-10"
      >
        <div
          class="w-11/12 xs:w-80 sm:w-64 lg:w-80 mx-auto sm:mx-px h-fit bg-white border shadow rounded-xl"
        >
          <div class="p-5">
            <div
              v-if="!selectedMode"
              class="text-4xl text-black font-bold flex items-center gap-x-1"
            >
              <div>$3</div>
              <div class="text-sm mt-3">/month</div>
            </div>
            <div
              v-if="selectedMode"
              class="text-4xl text-black font-bold flex items-center gap-x-1"
            >
              <div>$30</div>
              <div class="text-sm mt-3">/year</div>
            </div>
            <p class="mt-4 text-xl font-semibold">Starter</p>
            <p class="mt-1 text-base text-stone-500 font-medium">
              Get started with the essential features.
            </p>
          </div>
          <div class="bg-stone-200 w-full h-px my-2"></div>
          <div class="p-5">
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">Access 300 japanese words</p>
            </div>
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">Learn 50 grammar points</p>
            </div>
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">
                Discover 200 expressions and phrases
              </p>
            </div>
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">
                Save words, expressions or grammar in your notebook
              </p>
            </div>
            <button
              :disabled="isCreatingCheckout"
              class="mt-7 w-full h-10 bg-black text-white font-medium flex items-center justify-center gap-x-3 rounded-lg"
              @click="createCheckout('BASIC')"
            >
              <RefreshCcw
                class="animate-spin"
                v-if="isCreatingCheckout"
                :size="16"
              />
              Select plan
            </button>
          </div>
        </div>
        <div
          class="w-11/12 xs:w-80 sm:w-64 lg:w-80 mx-auto sm:mx-px h-fit bg-white border shadow rounded-xl mt-8 sm:mt-0"
        >
          <div class="p-5">
            <div
              v-if="!selectedMode"
              class="text-4xl text-black font-bold flex items-center gap-x-1"
            >
              <div>$4.5</div>
              <div class="text-sm mt-3">/month</div>
            </div>
            <div
              v-if="selectedMode"
              class="text-4xl text-black font-bold flex items-center gap-x-1"
            >
              <div>$45</div>
              <div class="text-sm mt-3">/year</div>
            </div>
            <p class="mt-4 text-xl font-semibold">Premium</p>
            <p class="mt-1 text-base text-stone-500 font-medium">
              Get access to all the features and the upcoming one.
            </p>
          </div>
          <div class="bg-stone-200 w-full h-px my-2"></div>
          <div class="p-5">
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">Access 3000 japanese words</p>
            </div>
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">More than 700 grammar points</p>
            </div>
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">
                Discover 1000 expressions and phrases
              </p>
            </div>
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">
                Save words, expressions or grammar in your notebook
              </p>
            </div>
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">Audio transcriptiion of words and expressions (soon)</p>
            </div>
            <div class="flex items-start gap-x-3 mt-2.5">
              <span class="text-green-500">
                <CheckCircle2 :size="17" />
              </span>
              <p class="font-medium -mt-1">Access to new features</p>
            </div>
            <button
              :disabled="isCreatingCheckout"
              class="mt-7 w-full h-10 bg-black text-white font-medium flex items-center justify-center gap-x-3 rounded-lg"
              @click="createCheckout('PREMIUM')"
            >
              <RefreshCcw
                class="animate-spin"
                v-if="isCreatingCheckout"
                :size="16"
              />
              Select plan
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="w-full py-20">
      <div
        class="w-10/12 mx-auto flex flex-col sm:flex-row items-start justify-center gap-x-10"
      >
        <div class="w-full sm:w-1/2 sm:mt-10">
          <h2 class="text-4xl text-black font-bold">FAQ</h2>
          <p class="text-base text-stone-500 font-medium mt-5">
            Some of the questions you might ask yourself
          </p>
        </div>
        <div class="w-full sm:w-1/2 mt-10 sm:mt-0">
          <UAccordion
            :items="items"
            variant="soft"
            size="xl"
            :ui="{
              item: {
                size: 'text-sm',
                color: 'text-stone-500 dark:text-stone-400',
              },
            }"
          >
            <template #default="{ item }">
              <div
                class="w-full h-11 bg-stone-100 flex items-center justify-start px-5 py-4 my-1 rounded-lg cursor-pointer"
              >
                <span class="truncate font-medium text-black">{{
                  item.label
                }}</span>
              </div>
            </template>
          </UAccordion>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="w-full h-44 bg-black mt-12 flex items-center">
      <div class="w-9/12 mx-auto flex items-center justify-between">
        <div>
          <h1 class="text-white text-2xl logo-text font-medium">Wordklang</h1>
          <p class="text-white">©2023</p>
        </div>
        <div class="flex items-center gap-x-2">
          <a
            href="http://x.com/wordklang"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white"
            >Follow on X (Twitter)</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Languages,
  ScrollText,
  Quote,
  RefreshCcw,
  CheckCircle2,
  X,
} from "lucide-vue-next";

const selectedMode = ref(false);
const isMenuOpen = ref(false);

const items = [
  {
    label: "1. How does Wordklang work?",
    defaultOpen: true,
    content:
      "Wordklang offers you a list of words, expressions and grammar points that you can browse and discover to improve your Japanese. Wordklang gives you access to word definitions and usage examples. Grammar points with explanations and examples to help you form your own sentences.",
  },
  {
    label: "2. Can Wordklang replace a real japanese teacher?",
    content:
      "No, wordklang can never replace a real teacher to help you improve your Japanese.",
  },
  {
    label: "3. Can I add my own words or expressions in Wordklang?",
    content:
      "At the moment, you can't save your own words and phrases in wordklang.",
  },
  {
    label: "4. How much does Wordklang cost?",
    content:
      "Right now the Basic plan costs $3/mo, the Premium plan $4,5/mo. You get 2 months free if you subscribe annually. You can cancel at any time.",
  },
  {
    label: "5. Is the payment service secure?",
    content:
      "Yes, our payment service is secure. We use Lemon Squeezy for financial processing, and we do not store any information about your card.",
  },
  {
    label: "6. Can i get a refund?",
    content:
      "Unfortunately, we cannot offer refunds as we can't prevent the app data to be store by anyone and then be use later. We keep every revenue earned through a subscription as a way to sell part of our data such as word and grammar lists.",
  },
  {
    label: "7. How do i cancel my subscription",
    content:
      "You can cancel your subscription at any time. Go to the menu of Wordklang when you are logged in and click Billing, you will be redirected to Stripe's billing portal where you can download invoices, switch plans and cancel your subscription.",
  },
];

const createCheckout = (plan) => {};
</script>
