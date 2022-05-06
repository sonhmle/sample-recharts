import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    timestamp: 1650857037059,
    cpu: 113.63636016845703,
    memory: 88.23795318603516,
    wifi: {
      rxBytes: 158858,
      txBytes: 158858
    },
    time: "00:00:00",
    sent: "0.16",
    received: "0.16"
  },
  {
    timestamp: 1650857040060,
    cpu: 314.24462890625,
    memory: 96.38956451416016,
    wifi: "{rxBytes: 3974885, txBytes: 3885456}",
    time: "00:00:03",
    sent: "3.89",
    received: "3.97"
  },
  {
    timestamp: 1650857043062,
    cpu: 303.341552734375,
    memory: 97.59771728515625,
    wifi: "{rxBytes: 5401862, txBytes: 5379582}",
    time: "00:00:06",
    sent: "5.38",
    received: "5.40"
  },
  {
    timestamp: 1650857045064,
    cpu: 250.77098083496094,
    memory: 96.89376068115234,
    wifi: "{rxBytes: 3783050, txBytes: 3783785}",
    time: "00:00:08",
    sent: "3.78",
    received: "3.78"
  },
  {
    timestamp: 1650857049161,
    cpu: 392.9107666015625,
    memory: 98.91847229003906,
    wifi: "{rxBytes: 14461297, txBytes: 9277697}",
    time: "00:00:12",
    sent: "9.28",
    received: "14.46"
  },
  {
    timestamp: 1650857052062,
    cpu: 316.9105529785156,
    memory: 97.81346893310547,
    wifi: "{rxBytes: 12149303, txBytes: 11184601}",
    time: "00:00:15",
    sent: "11.18",
    received: "12.15"
  },
  {
    timestamp: 1650857055059,
    cpu: 284.9834289550781,
    memory: 98.04652404785156,
    wifi: "{rxBytes: 18337371, txBytes: 18240827}",
    time: "00:00:18",
    sent: "18.24",
    received: "18.34"
  },
  {
    timestamp: 1650857058060,
    cpu: 373.9609680175781,
    memory: 98.34146118164062,
    wifi: "{rxBytes: 20609310, txBytes: 20610173}",
    time: "00:00:21",
    sent: "20.61",
    received: "20.61"
  },
  {
    timestamp: 1650857062057,
    cpu: 298.5237731933594,
    memory: 94.02997589111328,
    wifi: "{rxBytes: 13336081, txBytes: 13336159}",
    time: "00:00:24",
    sent: "13.34",
    received: "13.34"
  },
  {
    timestamp: 1650857065061,
    cpu: 281.64459228515625,
    memory: 94.5086898803711,
    wifi: "{rxBytes: 16679635, txBytes: 16684436}",
    time: "00:00:28",
    sent: "16.68",
    received: "16.68"
  },
  {
    timestamp: 1650857068061,
    cpu: 294.9438171386719,
    memory: 94.30509948730469,
    wifi: "{rxBytes: 19220180, txBytes: 19220180}",
    time: "00:00:31",
    sent: "19.22",
    received: "19.22"
  },
  {
    timestamp: 1650857071057,
    cpu: 215.45455932617188,
    memory: 94.90748596191406,
    wifi: "{rxBytes: 12959574, txBytes: 12959616}",
    time: "00:00:33",
    sent: "12.96",
    received: "12.96"
  },
  {
    timestamp: 1650857074056,
    cpu: 217.86489868164062,
    memory: 94.8074951171875,
    wifi: "{rxBytes: 9441573, txBytes: 9441639}",
    time: "00:00:36",
    sent: "9.44",
    received: "9.44"
  },
  {
    timestamp: 1650857077060,
    cpu: 333.0362243652344,
    memory: 95.94033813476562,
    wifi: "{rxBytes: 21307721, txBytes: 21295599}",
    time: "00:00:40",
    sent: "21.30",
    received: "21.31"
  },
  {
    timestamp: 1650857080060,
    cpu: 391.909912109375,
    memory: 97.89091491699219,
    wifi: "{rxBytes: 16634096, txBytes: 13881214}",
    time: "00:00:43",
    sent: "13.88",
    received: "16.63"
  },
  {
    timestamp: 1650857083057,
    cpu: 242.9312744140625,
    memory: 96.76384735107422,
    wifi: "{rxBytes: 13288540, txBytes: 13258532}",
    time: "00:00:45",
    sent: "13.26",
    received: "13.29"
  },
  {
    timestamp: 1650857086058,
    cpu: 262,
    memory: 98.30623626708984,
    wifi: "{rxBytes: 3098820, txBytes: 3099656}",
    time: "00:00:48",
    sent: "3.10",
    received: "3.10"
  },
  {
    timestamp: 1650857089059,
    cpu: 331.1175842285156,
    memory: 96.8867416381836,
    wifi: "{rxBytes: 9485211, txBytes: 9485211}",
    time: "00:00:52",
    sent: "9.49",
    received: "9.49"
  },
  {
    timestamp: 1650857092059,
    cpu: 321.84844970703125,
    memory: 97.14742279052734,
    wifi: "{rxBytes: 6585750, txBytes: 6477784}",
    time: "00:00:55",
    sent: "6.48",
    received: "6.59"
  },
  {
    timestamp: 1650857095060,
    cpu: 282.5688171386719,
    memory: 97.62007904052734,
    wifi: "{rxBytes: 5175438, txBytes: 5175438}",
    time: "00:00:58",
    sent: "5.18",
    received: "5.18"
  },
  {
    timestamp: 1650857098056,
    cpu: 235.89315795898438,
    memory: 97.92903900146484,
    wifi: "{rxBytes: 64285, txBytes: 64285}",
    time: "00:01:00",
    sent: "0.06",
    received: "0.06"
  },
  {
    timestamp: 1650857101059,
    cpu: 373.9866638183594,
    memory: 88.80929565429688,
    wifi: "{rxBytes: 6770722, txBytes: 6739738}",
    time: "00:01:04",
    sent: "6.74",
    received: "6.77"
  },
  {
    timestamp: 1650857104060,
    cpu: 256.9772033691406,
    memory: 87.87937927246094,
    wifi: "{rxBytes: 6445628, txBytes: 6411377}",
    time: "00:01:07",
    sent: "6.41",
    received: "6.45"
  },
  {
    timestamp: 1650857107058,
    cpu: 172.80233764648438,
    memory: 88.24799346923828,
    wifi: "{rxBytes: 6596415, txBytes: 6585372}",
    time: "00:01:09",
    sent: "6.59",
    received: "6.60"
  },
  {
    timestamp: 1650857110059,
    cpu: 209.6632080078125,
    memory: 88.5589599609375,
    wifi: "{rxBytes: 104998, txBytes: 100328}",
    time: "00:01:13",
    sent: "0.10",
    received: "0.10"
  }
];

const val = {
  key: "wifi",
  xKey: "time",
  rxKey: "received",
  txKey: "sent",
  yUnit: " MB/s"
};

export default function App() {
  const res = data.map((item) => ({
    ...item,
    sent: +item.sent,
    received: +item.received
  }));
  console.log(res);
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart margin={{ top: 10, right: 30 }} data={res}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={val.xKey} unit="" tick={{ fontSize: 12 }} />
          <YAxis unit={val.yUnit} width={80} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend iconType="line" iconSize={12} />
          <Line
            name="Received"
            type="monotone"
            dataKey={val.rxKey}
            stroke="blue"
            dot={false}
          />
          <Line
            name="Sent"
            type="monotone"
            dataKey={val.txKey}
            stroke="purple"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
