import diningRoomImg from "@assets/generated_images/Sunlit_dining_room_ambiance_9b17e420.png";
import barImg from "@assets/generated_images/Bar_area_ambiance_shot_3b6bf9a4.png";
import tableSettingImg from "@assets/generated_images/Table_setting_detail_shot_930ade52.png";

export function AmbianceGallery() {
  return (
    <section
      className="py-24 md:py-32 px-6"
      data-testid="section-ambiance"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-display text-4xl md:text-5xl font-light text-center mb-16 tracking-wide"
          data-testid="text-ambiance-title"
        >
          The Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="md:col-span-2 overflow-hidden rounded-lg"
            data-testid="img-container-dining-room"
          >
            <img
              src={diningRoomImg}
              alt="Elegant dining room with natural lighting"
              className="w-full h-full object-cover aspect-[21/9]"
              data-testid="img-dining-room"
            />
          </div>

          <div className="overflow-hidden rounded-lg" data-testid="img-container-bar">
            <img
              src={barImg}
              alt="Sophisticated bar area"
              className="w-full h-full object-cover aspect-[4/3]"
              data-testid="img-bar"
            />
          </div>

          <div className="overflow-hidden rounded-lg" data-testid="img-container-table">
            <img
              src={tableSettingImg}
              alt="Refined table setting details"
              className="w-full h-full object-cover aspect-[4/3]"
              data-testid="img-table-setting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
