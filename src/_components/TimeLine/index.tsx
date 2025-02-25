import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon: React.FC = () => <></>;

const Timeline: React.FC = () => {
  return (
    <div className="font-sans text-center">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-subtitle">بداية رحلتنا</h3>
          <p>
            بدأنا رحلتنا في تصميم الأبواب والنوافذ والديكور المنزلي، مع التركيز
            على الجودة العالية والتصاميم العصرية.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            إطلاق مجموعة تصاميم جديدة
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            التوسع في الابتكار
          </h4>
          <p>
            قمنا بتطوير تصاميم جديدة للأبواب والنوافذ الحديثة، بما يتماشى مع
            أحدث الاتجاهات في الديكور الداخلي والخارجي.
          </p>
          <div className="flex justify-center">
            <Image
              width={250}
              height={250}
              src="/timeline/one.jpeg"
              alt="إطلاق مجموعة تصاميم جديدة"
              className="mt-4 rounded-lg object-cover"
            />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            الابتكار في التصميم
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            إطلاق تصاميم ذكية
          </h4>
          <p>
            قدمنا تصاميم ذكية للأبواب والنوافذ، تتيح إمكانية التحكم بها عن بعد،
            مما يوفر الراحة والأمان للعملاء.
          </p>
          <div className="flex justify-center">
            <Image
              width={250}
              height={250}
              src="/timeline/five.jpeg"
              alt="الابتكار في التصميم"
              className="mt-4 rounded-lg object-cover"
            />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            تصميم الواجهات الخارجية
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            الابتكار في المظهر الخارجي
          </h4>
          <p>
            نقدم تصاميم عصرية للواجهات الخارجية للمنازل، مع التركيز على التفاصيل
            الجمالية وجودة المواد المستخدمة، لضمان مظهر فاخر يدوم طويلاً.
          </p>
          <div className="flex justify-center">
            <Image
              width={250}
              height={250}
              src="/timeline/sex.jpeg"
              alt="تصميم الواجهات الخارجية"
              className="mt-4 rounded-lg object-cover"
            />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
