const profileImgSrc =
  "https://lh3.googleusercontent.com/VAdRMJl2EHvlTGlSflGv23ztOVFMu8NLQqi26fK3tKBfFeyXGq3KNjjfIOPhyDf0rem0JiFRkBX1Cro1kovduUnLZuq6gwzGCeA8J_75fqpG9OmN_3G5MEdzRvBzl1XlJG_7JlMrQM80_BA1h5EjSJ-R50a1Mp2n3FfXbo-sc7x_YAOvmn_jdBH8rA0VOxN7dud4GiHJFDapW_WMWXWGZ9xn2X8L2g_BoXuF649lpjiw-rC9O2WlVtIQu_cU_2EkMirnBDEIp9sQDvNnVxJi4yY_xnVVzE5xln2mfcgPmyrn2Q7KvvdTBBdlh9G8Np5MUToWpxNm0PghDWDUJx1ZU45M5Osk7WgFL6NUv9WIQulrI3W3cDlKhA5ogcJPwFGhLU8PF9ZoBAXZDRqQAjyDCzhwmThUKQ0V10gSmQyx4NsQQf115e31qlnxf4bFA1tNMbStnumZrNg0v8VQfAPnfPZEvrOjJTNVHTdwXiisrLaqNrGgouij_xPufVGY-sPv2ER6YTpjoTnDf77VIKzLmYmsHqJizY1SwDt45BGRawhRCPWVrnLrV7bSAJRBulZ37259Zc5_R7_ZbEGtJeBwsO6BBjFD2CFrLgXi02k_5mUKIMq_t3NYdhBhHtC2DJYDXFZpXDRhGwwThUHH07ZTiFpncs5Ut0h6w0OxajadJc37KHUqSNCdPpnOEGJWiFUFKJ92jvLC4wCitpxCCCKoTvHgE5SKKmTOo28A91E3c7hHTFzgtxJvZ17l2ZL6podgmjQ_eoHOrMttSpB_RftmGtDoap9amIEKS9xLNm0nmOkVeZA4bc2GVLMTOsHB1xw9FgpE2vMM3LT0-Kfx9z6lWcOxToLia59CT_wnxCqbwGsZ1a2-7DRf66nlM5K5wKtkHMtRTFkwn86nPMPNURGQq8C2Sk3T-YXUMn0TXaKVFVx_=s2036-no?authuser=0";

const profileImg = document.querySelector("#profile-img");
profileImg.src = profileImgSrc;
// profileImg.setAttribute("src", profileImgSrc);
// console.log("test");

const storyList = document.querySelector(".story-list");

storyList.addEventListener("mouseover", () => {
  console.log(storyList.classList.remove("scroll-hide"));
});

storyList.addEventListener("mouseout", () => {
  storyList.classList.add("scroll-hide");
});
