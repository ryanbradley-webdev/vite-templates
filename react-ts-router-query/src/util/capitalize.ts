export const capitalize = (phrase: string) => {
    const words = phrase.split(' ')

    return words.map(word => (
            word.split('').map((letter, idx) => {
                if (idx === 0) return letter.toUpperCase()

                return letter
            }).join('')
        )).join(' ')
}