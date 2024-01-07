import create from 'zustand'


export const useModalStore = create(set => ({
    isOpen: false,
    content: null,
    callBack: null,
    openModal: content => set(() => ({ isOpen: true, content })),
    closeModal: () => set(() => ({ isOpen: false})),
}))
export default useModalStore
