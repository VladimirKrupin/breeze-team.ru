<template>
    <footer class="footer has-cards">
        <h2 style="color: #626662" class="row justify-content-center mb-5 h1">{{$lang.landing.our_projects}}</h2>
        <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <h3 class="row justify-content-center mt-2 pb-2 text-uppercase font-weight-600 h1"><span style="color:rgba(46,168,244,0.72);text-shadow: 1px 1px 4px rgba(0,0,0,0.33)">Skill Tracking</span></h3>
                    <div class="card card-lift--hover shadow border-0">
                        <a target="_blank" :href="this.socials.skill" title="Skill Tracking">
                            <img v-lazy="'img/theme/skill.png'" class="card-img">
                        </a>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-md-0">
                    <h3 class="row justify-content-center mt-2 pb-2 text-uppercase font-weight-600 h1"><span style="color:rgba(134,50,244,0.72);text-shadow: 1px 1px 4px rgba(0,0,0,0.33)">GIFKAWOOD</span></h3>
                    <div class="card card-lift--hover shadow border-0">
                        <a target="_blank" href="https://gifkawood.ru" title="Skill Tracking">
                            <img v-lazy="'img/theme/gifkawood.png'" class="card-img">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">{{$lang.landing.thanks}}</h3>
                    <h4 class="mb-0 font-weight-light">{{$lang.landing.thanks_text}}</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" :href="this.socials.tw"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       :title="$lang.landing.tw">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" :href="this.socials.fb"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       :title="$lang.landing.fb">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" :href="this.socials.vk"
                       class="btn btn-neutral btn-icon-only btn-lg btn-round" data-toggle="tooltip"
                       :title="$lang.landing.vk">
                        <i class="fa fa-vk"></i>
                    </a>
                    <a target="_blank" rel="noopener" :href="this.socials.git"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       :title="$lang.landing.git">
                        <i class="fa fa-github"></i>
                    </a>
                    <a target="_blank" rel="noopener" :href="this.socials.inst"
                       class="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg" data-toggle="tooltip"
                       :title="$lang.landing.inst">
                        <i class="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a target="_blank" rel="noopener">{{$lang.landing.signature}}</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end footer-mobile">
                        <li class="nav-item">
                            <a :href="this.socials.coders_link" class="nav-link" target="_blank" rel="noopener">{{$lang.landing.coders_label}}</a>
                        </li>
                        <li class="nav-item">
                            <a :href="this.socials.about_us" class="nav-link" target="_blank" rel="noopener">{{$lang.landing.about_us}}</a>
                        </li>
                        <li class="nav-item">
                            <a :href="this.socials.news" class="nav-link" target="_blank" rel="noopener">{{$lang.landing.news}}</a>
                        </li>
                        <li class="nav-item">
                            <a :href="this.socials.mit"
                               class="nav-link" target="_blank" rel="noopener">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
        year: new Date().getFullYear()
    }
  }
};
</script>
<style lang="scss">
    @media (max-width: 768px) {
        .footer-mobile {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            .nav-item {
                width: 100%;
                display: block;
                .nav-link {
                    padding-left: 0;
                }
            }
        }
    }
</style>
