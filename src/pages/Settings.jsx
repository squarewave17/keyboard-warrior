function Settings() {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
        <div className="card-body w-full">
          <h2 className="card-title">Settings</h2>
          <div className="flex justify-between items-center">
            <div>
              <p>Game Mode</p>
            </div>

            <div>
              <select className="select w-full max-w-xs">
                <option>Alphabet</option>
                <option>Most Common Words</option>
                <option>Developer</option>
                <option>Phrases</option>
                <option>Custom</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p>Control</p>
            </div>
            <div>
              <p>Setting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center">
        <div className="card-body">
          <h2 className="card-title">Statistics</h2>
        </div>
      </div>
    </div>
  );
}
export default Settings;
