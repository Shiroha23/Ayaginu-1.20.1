ServerEvents.tags("item", event => {

    //添加橡胶tag
    event.add('forge:rubber', 'thermal:cured_rubber')
    event.add('forge:rubber', 'techreborn:rubber')

    event.add('forge:dusts/ender_pearl', 'enderio:powdered_ender_pearl')

})

ServerEvents.recipes(event => {
    
//统一箱子
    event.shaped('minecraft:chest',[
        'XXX',
        'X X',
        'XXX'
    ],{
        X:'#minecraft:planks'
    })

//统一工作台
    event.shapeless('minecraft:crafting_table',['#blue_skies:crafting_tables'])
    event.shapeless('minecraft:crafting_table',['#forge:workbench'])     

//机械动力
    //末影之眼批量缠魂为恶魂之泪
    event.custom({
      "type": "create:haunting",
      "ingredients": [
        {
          "item": "minecraft:ender_eye"
        }
      ],
      "results": [
        {
          "item": "minecraft:ghast_tear",
          "chance": 0.5
        }
      ]
    })

//移除煤炭烧制石墨
    event.remove({id: 'biggerreactors:smelting/graphite_ingot'})  
    event.remove({id: 'biggerreactors:blasting/graphite_ingot'})  

//石墨精华合成修改
    event.remove({id: 'mysticalagriculture:essence/common/graphite_ingot'})
    event.shaped('biggerreactors:graphite_ingot', [
        'XXX',
        'X X',
        'XXX'
    ], {
        X: 'mysticalagriculture:graphite_essence'
    })

//统一石墨/石墨粉
    event.shapeless('biggerreactors:graphite_ingot',['immersiveengineering:ingot_hop_graphite'])
    event.shapeless('immersiveengineering:ingot_hop_graphite',['biggerreactors:graphite_ingot'])
    event.shapeless('biggerreactors:graphite_dust',['immersiveengineering:dust_hop_graphite'])
    event.shapeless('immersiveengineering:dust_hop_graphite',['biggerreactors:graphite_dust'])

//统一橡胶
    event.shapeless('thermal:rubber',['techreborn:sap'])
    event.shapeless('techreborn:sap',['thermal:rubber'])
    event.shapeless('thermal:cured_rubber',['techreborn:rubber'])
    event.shapeless('techreborn:rubber',['thermal:cured_rubber'])

//橡胶精华合成科技复兴橡胶
    event.shaped(Item.of('techreborn:rubber', 8), [
        'X',
        'X',
        'X'
    ], {
        X: 'mysticalagriculture:rubber_essence'
    })

//通量网络
    //通量核心
        event.remove({output:'fluxnetworks:flux_core'})
        event.shaped('fluxnetworks:flux_core',[
            'ABA',
            'CDE',
            'AFA'
        ],{
            A:'fluxnetworks:flux_dust',
            B:'immersiveengineering:component_electronic_adv',
            C:'mekanism:teleportation_core',
            D:'ae2:singularity',
            E:'enderio:weather_crystal',
            F:'techreborn:superconductor'
        })

    //通量方块
        event.remove({output:'fluxnetworks:flux_block'})
        event.shaped('fluxnetworks:flux_block',[
            'XXX',
            'XYX',
            'XXX'
        ],{
            X:'fluxnetworks:flux_dust',
            Y:'fluxnetworks:flux_core'
        })

    //输入
        event.remove({output:'fluxnetworks:flux_plug'})
        event.shaped('fluxnetworks:flux_plug',[
            ' X ',
            'XYX',
            ' X '
        ],{
            X:'#forge:ingots/hop_graphite',
            Y:'fluxnetworks:flux_core'
        })

    //接入
        event.remove({output:'fluxnetworks:flux_point'})
        event.shaped('fluxnetworks:flux_point',[
            ' X ',
            'XYX',
            ' X '
        ],{
            X:'#forge:ingots/signalum',
            Y:'fluxnetworks:flux_core'
        })

//禁用烧铁得钢
    event.remove({id:'beyond_earth:steel_ingot_blasting'})

//神化宝石粉
    //粉碎轮-机械动力
    event.custom({
      "type": "create:crushing",
      "ingredients": [
        {
          "item": "apotheosis:gem"
        }
      ],
      "results": [
        {
          "item": "apotheosis:gem_dust"
        }
      ],
      "processingTime": 250
    })

    //粉碎机-沉浸工程
    event.custom({
      "type":"immersiveengineering:crusher",
      "secondaries":[],
      "result":{"count":1,"base_ingredient":{"item": "apotheosis:gem_dust"}},
      "input":{"item":"apotheosis:gem"},
      "energy":3000
    })


    //粉碎机-沉浸工程
    event.custom({
        "type":"immersiveengineering:crusher",
        "secondaries":[],
        "result":{"count":1,"base_ingredient":{"item": "ae2:ender_dust"}},
        "input":{"item":"minecraft:ender_pearl"},
        "energy":3000
      })


//附魔灌注台
    event.remove({id:'enchantinginfuser:enchanting_infuser'})
    event.shaped('enchantinginfuser:enchanting_infuser',[
        'DAD',
        'BCB',
        'EAE'
    ],{
        A:'forbidden_arcanus:dark_rune',
        B:'forbidden_arcanus:deorum_ingot',
        C:'minecraft:enchanting_table',
        D:'minecraft:amethyst_block',
        E:'minecraft:crying_obsidian'
    })

    event.remove({id:'enchantinginfuser:advanced_enchanting_infuser'})
    event.shaped('enchantinginfuser:advanced_enchanting_infuser',[
        'DAD',
        'BCB',
        'EAE'
    ],{
        A:'enigmaticlegacy:etherium_ingot',
        B:'mythicbotany:alfsteel_ingot',
        C:'enchantinginfuser:enchanting_infuser',
        D:'minecraft:netherite_block',
        E:'minecraft:crying_obsidian'
    })

//传送石
    event.remove({output: 'waystones:warp_stone'})
    event.shaped('waystones:warp_stone',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:amethyst_shard',
        B:'waystones:warp_dust',
        C:'enigmaticlegacy:astral_dust'
    })

//传送粉尘
event.remove({output: 'waystones:warp_dust'})
event.shapeless('waystones:warp_dust',['techreborn:ender_eye_dust','mysticalagriculture:experience_droplet'])

//时间之瓶
event.remove({id:'tiab:time_in_a_bottle'})
event.shaped('tiab:time_in_a_bottle',[
    'DAD',
    'BCB',
    'DBD'
],{
    A:'minecraft:clock',
    B:'minecraft:glass',
    C:'ars_nouveau:source_gem_block',
    D:'occultism:iesnium_ingot'
})

//量子捕捉器
event.remove({id:'forbidden_arcanus:quantum_catcher'})
event.shaped('forbidden_arcanus:quantum_catcher',[
    'BAB',
    'ACA',
    'BAB'
],{
    A:'forbidden_arcanus:spawner_scrap',
    B:'bloodmagic:ingot_hellforged',
    C:'forbidden_arcanus:arcane_crystal_block'
})

//通量粉尘
    event.custom({
        "type":"extendedcrafting:combination",
        "powerCost":144000,
        "input":{
            "item":"thermal:enderium_dust"
        },
        "ingredients":[
            {
            "item":"thermal:signalum_dust"
            },
            {
            "item":"thermal:signalum_dust"
            },
            {
            "item":"thermal:lumium_dust"
            },
            {
            "item":"thermal:lumium_dust"
            },
            {
            "item":"mekanism:dust_lithium"
            },
            {
            "item":"immersiveengineering:dust_hop_graphite"
            },
            {
            "item":"enderio:ender_crystal_powder"
            },
            {
            "item":"techreborn:chrome_dust"
            }
        ],
        "result":{
            "item":"fluxnetworks:flux_dust",
            "count":9
        }
    })
    
})
