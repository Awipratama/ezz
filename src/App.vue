<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

@media only screen and (max-width: 778px) {
  body {
    padding-top: var(--nav-height);
  }

}

.grid-sizer-3,
.grid-sizer-3~.grid-item,
.grid-item-3 {
  width: 33.33333333333333%;
}

.grid-sizer-2,
.grid-sizer-2~.grid-item,
.grid-item-2 {
  width: 50%
}

.grid-sizer-1,
.grid-sizer-1~.grid-item,
.grid-item-1 {
  width: 100%;
}


@media only screen and (min-width: 768px; ) {

  .grid-sizer-md-1,
  .grid-sizer-md-1~.grid-item,
  .grid-item-md-1 {
    width: 100%;
  }

  .grid-sizer-md-2,
  .grid-sizer-md-2~.grid-item,
  .grid-item-md-2 {
    width: 50%;
  }

  .grid-sizer-md-3,
  .grid-sizer-md-3~.grid-item,
  .grid-item-md-3 {
    width: 33.33333333333333%;
  }
}

@media only screen and (min-width: 992px; ) {

  .grid-sizer-lg-1,
  .grid-sizer-lg-1~.grid-item,
  .grid-item-lg-1 {
    width: 100%;
  }

  .grid-sizer-lg-2,
  .grid-sizer-lg-2~.grid-item,
  .grid-item-lg-2 {
    width: 50%;
  }

  .grid-sizer-lg-3,
  .grid-sizer-lg-3~.grid-item,
  .grid-item-lg-3 {
    width: 33.33333333333333%;
  }
}
</style>