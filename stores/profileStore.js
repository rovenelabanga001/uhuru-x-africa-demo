export const useProfileStore = defineStore("profile", {
  state: () => ({
    userInfo: reactive({
      region: "",
      language: "",
      age_range: "",
      gender: "",
      employment_status: "",
      goals: [],
      role: "",
      interests: [],
    }),
    profileProgress: 0,
  }),

  actions: {
    setUserInfo(info) {
      this.userInfo = { ...this.userInfo, ...info };
      this.calculateProfileProgress();
    },

    async updateUserInfoOnServer(userId) {
      const config = useRuntimeConfig();
      try {
        const res = await $fetch(`${config.public.baseUrl}/users/${userId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: { userInfo: this.userInfo },
        });

        console.log("Userinfo updated on server:", res);
        if (res.userInfo) {
          this.setUserInfo(res.userInfo);
        }
        return res;
      } catch (err) {
        console.error(err);
      }
    },

    calculateProfileProgress() {
      let progress = 0;

      const hasDemographics =
        this.userInfo.region &&
        this.userInfo.language &&
        this.userInfo.age_range &&
        this.userInfo.gender &&
        this.userInfo.employment_status &&
        this.userInfo.goals.length > 0;

      const hasRole = this.userInfo.role && this.userInfo.role.trim() !== "";

      const hasInterests = this.userInfo.interests.length > 0;

      if (hasDemographics) progress += 33;
      if (hasRole) progress += 33;
      if (hasInterests) progress += 34;

      console.log(progress);

      this.profileProgress = progress;
      return progress;
    },
  },
});
