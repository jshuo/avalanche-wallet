import { Module } from 'vuex'
import { RootState } from '@/store/types'
import { SecuXState } from '@/store/modules/secux/types'
const { SecuxScreenDevice } = require('@secux/protocol-device/lib/protocol-screendevice')

const secux_module: Module<SecuXState, RootState> = {
    namespaced: true,
    state: {
        isBlock: false, // if true a modal blocks the window
        isPrompt: false,
        isUpgradeRequired: false,
        isWalletLoading: false,
        messages: [],
        title: 'title',
        info: `info'`,
        Transport: {},
        totalBalance: '',
    },
    mutations: {
        openModal(state, input) {
            state.title = input.title
            state.info = input.info
            state.messages = input.messages
            state.isPrompt = input.isPrompt
            state.isBlock = true
        },
        closeModal(state) {
            state.messages = []
            state.isBlock = false
        },
        setIsUpgradeRequired(state, val) {
            state.isUpgradeRequired = val
        },
        setIsWalletLoading(state, val) {
            state.isWalletLoading = val
        },
        setTransport(state, val) {
            state.Transport = val
        },
        setTotalBalance(state, val) {
            state.totalBalance = val
        },
    },
    actions: {
        async updateTotalBalance({ state, dispatch, commit, getters, rootState }, data) {
            console.log(data)
            commit('setTotalBalance', data.totalBalance)
            await SecuxScreenDevice.SetAccount(state.Transport, {
                name: 'AVAX on SecuX',
                path: "m/44'/9000'/0'",
                balance: data.totalBalance,
            })
        },
    },
}

export default secux_module
