
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'Footer': typeof import("../components/Footer.vue")['default']
    'Navbar': typeof import("../components/Navbar.vue")['default']
    'PopUp': typeof import("../components/PopUp.vue")['default']
    'SectionDetailAllRoomSection': typeof import("../components/Section/Detail/AllRoomSection.vue")['default']
    'SectionDetailDiningSectionDetail': typeof import("../components/Section/Detail/DiningSectionDetail.vue")['default']
    'SectionDetailFacilitiesSectionDetail': typeof import("../components/Section/Detail/FacilitiesSectionDetail.vue")['default']
    'SectionDetailMeetingSectionDetail': typeof import("../components/Section/Detail/MeetingSectionDetail.vue")['default']
    'SectionDetailNearbySectionDetail': typeof import("../components/Section/Detail/NearbySectionDetail.vue")['default']
    'SectionDetailOfferSectionDetail': typeof import("../components/Section/Detail/OfferSectionDetail.vue")['default']
    'SectionDetailRoomSectionDetail': typeof import("../components/Section/Detail/RoomSectionDetail.vue")['default']
    'SectionDiningSectionHome': typeof import("../components/Section/DiningSectionHome.vue")['default']
    'SectionHeroSection': typeof import("../components/Section/HeroSection.vue")['default']
    'SectionNearbySectionHome': typeof import("../components/Section/NearbySectionHome.vue")['default']
    'SectionOfferSectionHome': typeof import("../components/Section/OfferSectionHome.vue")['default']
    'SectionRoomSectionHome': typeof import("../components/Section/RoomSectionHome.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyFooter': typeof import("../components/Footer.vue")['default']
    'LazyNavbar': typeof import("../components/Navbar.vue")['default']
    'LazyPopUp': typeof import("../components/PopUp.vue")['default']
    'LazySectionDetailAllRoomSection': typeof import("../components/Section/Detail/AllRoomSection.vue")['default']
    'LazySectionDetailDiningSectionDetail': typeof import("../components/Section/Detail/DiningSectionDetail.vue")['default']
    'LazySectionDetailFacilitiesSectionDetail': typeof import("../components/Section/Detail/FacilitiesSectionDetail.vue")['default']
    'LazySectionDetailMeetingSectionDetail': typeof import("../components/Section/Detail/MeetingSectionDetail.vue")['default']
    'LazySectionDetailNearbySectionDetail': typeof import("../components/Section/Detail/NearbySectionDetail.vue")['default']
    'LazySectionDetailOfferSectionDetail': typeof import("../components/Section/Detail/OfferSectionDetail.vue")['default']
    'LazySectionDetailRoomSectionDetail': typeof import("../components/Section/Detail/RoomSectionDetail.vue")['default']
    'LazySectionDiningSectionHome': typeof import("../components/Section/DiningSectionHome.vue")['default']
    'LazySectionHeroSection': typeof import("../components/Section/HeroSection.vue")['default']
    'LazySectionNearbySectionHome': typeof import("../components/Section/NearbySectionHome.vue")['default']
    'LazySectionOfferSectionHome': typeof import("../components/Section/OfferSectionHome.vue")['default']
    'LazySectionRoomSectionHome': typeof import("../components/Section/RoomSectionHome.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'LazyNuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Footer: typeof import("../components/Footer.vue")['default']
export const Navbar: typeof import("../components/Navbar.vue")['default']
export const PopUp: typeof import("../components/PopUp.vue")['default']
export const SectionDetailAllRoomSection: typeof import("../components/Section/Detail/AllRoomSection.vue")['default']
export const SectionDetailDiningSectionDetail: typeof import("../components/Section/Detail/DiningSectionDetail.vue")['default']
export const SectionDetailFacilitiesSectionDetail: typeof import("../components/Section/Detail/FacilitiesSectionDetail.vue")['default']
export const SectionDetailMeetingSectionDetail: typeof import("../components/Section/Detail/MeetingSectionDetail.vue")['default']
export const SectionDetailNearbySectionDetail: typeof import("../components/Section/Detail/NearbySectionDetail.vue")['default']
export const SectionDetailOfferSectionDetail: typeof import("../components/Section/Detail/OfferSectionDetail.vue")['default']
export const SectionDetailRoomSectionDetail: typeof import("../components/Section/Detail/RoomSectionDetail.vue")['default']
export const SectionDiningSectionHome: typeof import("../components/Section/DiningSectionHome.vue")['default']
export const SectionHeroSection: typeof import("../components/Section/HeroSection.vue")['default']
export const SectionNearbySectionHome: typeof import("../components/Section/NearbySectionHome.vue")['default']
export const SectionOfferSectionHome: typeof import("../components/Section/OfferSectionHome.vue")['default']
export const SectionRoomSectionHome: typeof import("../components/Section/RoomSectionHome.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyFooter: typeof import("../components/Footer.vue")['default']
export const LazyNavbar: typeof import("../components/Navbar.vue")['default']
export const LazyPopUp: typeof import("../components/PopUp.vue")['default']
export const LazySectionDetailAllRoomSection: typeof import("../components/Section/Detail/AllRoomSection.vue")['default']
export const LazySectionDetailDiningSectionDetail: typeof import("../components/Section/Detail/DiningSectionDetail.vue")['default']
export const LazySectionDetailFacilitiesSectionDetail: typeof import("../components/Section/Detail/FacilitiesSectionDetail.vue")['default']
export const LazySectionDetailMeetingSectionDetail: typeof import("../components/Section/Detail/MeetingSectionDetail.vue")['default']
export const LazySectionDetailNearbySectionDetail: typeof import("../components/Section/Detail/NearbySectionDetail.vue")['default']
export const LazySectionDetailOfferSectionDetail: typeof import("../components/Section/Detail/OfferSectionDetail.vue")['default']
export const LazySectionDetailRoomSectionDetail: typeof import("../components/Section/Detail/RoomSectionDetail.vue")['default']
export const LazySectionDiningSectionHome: typeof import("../components/Section/DiningSectionHome.vue")['default']
export const LazySectionHeroSection: typeof import("../components/Section/HeroSection.vue")['default']
export const LazySectionNearbySectionHome: typeof import("../components/Section/NearbySectionHome.vue")['default']
export const LazySectionOfferSectionHome: typeof import("../components/Section/OfferSectionHome.vue")['default']
export const LazySectionRoomSectionHome: typeof import("../components/Section/RoomSectionHome.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const LazyNuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
