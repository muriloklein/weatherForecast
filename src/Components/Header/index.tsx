interface Props {
  handleSubmission: (ev: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setShowForecast: React.Dispatch<React.SetStateAction<boolean>>;
  cityName: string;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({
  handleSubmission,
  setShowForecast,
  cityName,
  setCityName,
}) => {
  return (
    <header>
      <nav>
        <button
          className="resetButton"
          onClick={() => {
            setShowForecast(false);
          }}
        >
          Início
        </button>
        <form onSubmit={handleSubmission}>
          <input
            type="text"
            value={cityName}
            placeholder="Nome Da Cidade"
            onChange={(e) => setCityName(e.target.value)}
          />
          <button className="searchButton">
            <i className="bi-search"></i>
          </button>
        </form>
        <button
          className="resetButton"
          onClick={() => {
            setShowForecast(false);
          }}
        >
          <i className="bi-cloud-drizzle"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
