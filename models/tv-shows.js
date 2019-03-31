const db = require('./conn');

class WorstTvShows {
    constructor(id, show_name, station, year_start, year_end) {
        this.id = id;
        this.showName = show_name;
        this.station = station;
        this.yearStart = year_start;
        this.yearEnd = year_end;
    }

    static getById(id) {
        return db.one(`select * from worst_tv_shows where id=${id}`)
            .then((worstTvShowsData) => {
                const oneOfTheWorstTvShow = new WorstTvShows(
                                            worstTvShowsData.id,
                                            worstTvShowsData.show_name,
                                            worstTvShowsData.station,
                                            worstTvShowsData.year_start,
                                            worstTvShowsData.year_end
                                            );
                return oneOfTheWorstTvShow;
            }) 
            .catch(() => {
                return null;
            });
    }

    static getAll() {
        return db.any(`select * from worst_tv_shows`)
            .then((arrayOfWorstTvShows) => {
                return arrayOfWorstTvShows.map((worstTvShowsData) => {
                    const worstTvShows = new WorstTvShows (
                                         worstTvShowsData.id,
                                         worstTvShowsData.show_name,
                                         worstTvShowsData.station,
                                         worstTvShowsData.year_start,
                                         worstTvShowsData.year_end
                    );
                    console.log(worstTvShows);
                    return worstTvShows;
                });
            })
            .catch(() => {
                return null;
            });
    }

    save() {
        return db.result(`update worst_tv_shows set
                            station=${this.station},
                            show_name=${this.showName},
                            year_start=${this.yearStart},
                            year_end=${this.yearEnd},
                        where id=${this.id}
                        `);
    }
}

module.exports = WorstTvShows;