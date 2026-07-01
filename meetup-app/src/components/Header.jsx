import { FaSearch } from "react-icons/fa";

const Header = ({ search, setSearch }) => {
  return (
    <header className="border-bottom p-3">

      <div className="container d-flex justify-content-between">

        <h2 className="text-danger">Meetup</h2>

      <div className="input-group"style={{ width: "320px" }}>
          <span className="input-group-text border-0 bg-white" 
            style={{ borderRadius: "12px 0 0 12px" }} >
            <FaSearch className="text-secondary"/>
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search by title or tags"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

        </div>

      </div>

    </header>
  );
};

export default Header;