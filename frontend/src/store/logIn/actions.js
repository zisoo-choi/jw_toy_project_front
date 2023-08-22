import axiosInst from '@/utility/axiosInst'

export default {
    requestNaverLoginToSpring() {
        return axiosInst.get('/authentication/naver/login')
            .then((res) => {
                window.location.href = res.data;
            })
    },
    getTokenToSpring(context, payload) {
        //axiosInst.get("/authentication/naver/login?code=" + payload)
        axiosInst.get("/authentication/naver/oauth-code?code=" + payload)
            .then((res) => {
                console.log("token : " + res.data)
                //localStorage.setItem("userToken", res.data.userToken)
                //localStorage.setItem("roleType", res.data.roleType)
                //context.commit(LOGIN_COMPLETE, true)
                //context.commit(SET_NICKNAME, res.data.nickname)

            });

    }

    // getAccessTokenFromSpringRedirection ({ commit }, payload) {
    //     const { code } = payload

    //     axiosInst.get(`/authentication/github/oauth-code?code=${code}`)
    //         .then((res) => {
    //             //alert("res: " + JSON.stringify(res.data))
    //             localStorage.setItem("userToken", res.data)
    //             commit(GITHUB_LOGIN_COMPLETE, true)
    //         })
    //         .catch((res) => {
    //             alert('문제 발생!')
    //         })
    // }
}

//actions => 서버에서 데이터를 가져와서 수정하고 싶을 때