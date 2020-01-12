#!/usr/bin/env python
import csv
import json
import sys


def read_csv(f):
    with open(f, newline='') as f:
        reader = csv.reader(f, delimiter=',', quotechar='"')
        result = [row for row in reader]
    return result


def parse_stations(xss):
    raw = xss[2:]
    lines = [[]]
    for [id, name, *_] in raw:
        if id:
            lines[-1].append({'id': int(id), 'name': name})
        else:
            lines.append([])
    return lines


def remove_duplicate_stop(stops):
    result = []
    for stop in stops:
        if 0 == len(result) or stop != result[-1]:
            result.append(stop)
    return result


def parse_trains(xss):
    speeds = xss[0][2:]
    counts = xss[1][2:]
    train_stops = [[] for _ in speeds]
    for xs in xss[2:]:
        if not xs[0]:
            continue
        station_id = int(xs[0])
        stops = xs[2:]
        for i in range(len(speeds)):
            if stops[i]:
                train_stops[i].append(station_id)
    return [
        {
            'stations': remove_duplicate_stop(train_stops[i]),
            'speed': speeds[i],
            'count': counts[i]
        } for i in range(len(speeds))
    ]


def main():
    files = sys.argv[1:]
    for file in files:
        xss = read_csv(file)
        lines = parse_stations(xss)
        trains = parse_trains(xss)
        result = {
            'mainLine': {'id': 1, 'stations': lines[0]},
            'subLines': [{'id': i + 2, 'stations': line} for i, line in enumerate(lines[1:])],
            'trains': trains
        }
        print(json.dumps(result, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
