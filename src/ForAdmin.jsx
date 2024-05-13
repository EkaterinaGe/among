export const ForAdmin = ({playersCount, setPlayersCount, traitorCount, setTraitorCount, setForAdmin, setIsAdd}) => {
    return (
        <>
            <p>Введите количество игроков</p>
            <input 
                type='number' 
                value={playersCount}
                onChange={e => setPlayersCount(e.target.value)}
            />
            <p>Введите количество предателей</p>
            <input 
                type='number'
                value={traitorCount}
                onChange={e => setTraitorCount(e.target.value)}
            />
            <button 
                type='submit'
                onClick={e => {
                    setForAdmin(false);
                    setIsAdd(true);
                    setPlayersCount(playersCount);
                    setTraitorCount(traitorCount);
                }}>
                Сохранить
            </button>
        </>
    )
}